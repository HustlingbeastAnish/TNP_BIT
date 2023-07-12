// controller.jsx
const StudentLogin = require("../models/StudLogin.jsx");
const Academics = require("../models/Academics.jsx");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Tasks = require("../models/Tasks.jsx");
require("dotenv").config();
const Authenticate = require("../middleware/Authenticate.jsx");
// Create of token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};
// Error Handlers
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = {
    name: "",
    email: "",
    phone: 0,
    password: "",
    roll: "",
    branch: "",
  };

  // Handling duplicate erros
  if (err.code === 11000) {
    // Check the duplicate field and assign the error message accordingly
    if (err.keyPattern.hasOwnProperty("email")) {
      errors.email = "Email already exists";
    } else if (err.keyPattern.hasOwnProperty("roll")) {
      errors.roll = "Roll number already exists";
    }
    return errors;
  }

  // Validation errors
  if (err.message.includes("STLOGINUSER validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.registerStudent = async (req, res) => {
  const { name, email, gender, phone, password, roll, branch } = req.body;
  console.log("Registering");
  if (!name || !email || !phone || !gender || !password || !roll || !branch) {
    console.log(req.body);
    return res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const userExists = await StudentLogin.findOne({ email });
    if (userExists) {
      if (userExists.email === email) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      } else {
        return res
          .status(400)
          .json({ error: "User with this roll number already exists" });
      }
    }

    const user = new StudentLogin({
      name,
      email,
      gender,
      phone,
      password,
      roll,
      branch,
    });

    // As soon as the student registers make a Academics Instance as well which can later on be editied
    const academic = new Academics({
      name,
      email,
      roll,
      college: {},
      school: {},
    });

    const tasklist = new Tasks({
      email,
      roll,
    });
    const academicDone = await academic.save();
    const signUp = await user.save();
    const tasksdone = await tasklist.save();
    if (signUp && academicDone && tasksdone) {
      return res.status(201).json({ message: "Registration successful" });
    } else {
      return res.status(400).json({ error: "Registration failed" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.loginStudent = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
      return res.status(400).json({ error: "None of the fields can be empty" });
    }
    const emailExists = await StudentLogin.findOne({ email: email });
    if (emailExists) {
      const PassMatch = await bcrypt.compare(password, emailExists.password);
      if (!PassMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      } else {
        const token = createToken(emailExists._id);
        res.cookie("jwtoken", token, {
          maxAge: maxAge * 1000,
          httpOnly: true,
        });

        emailExists.tokens.push({ token: token }); // Save the token in the tokens array
        await emailExists.save(); // Save the updated document
        return res.json({ emailExists, token });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log("Failed");
    return res.status(400).json({ error: "Invalid credentials" });
  }
};
exports.getAcademics = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ error: "Email parameter is missing" });
    }

    const exists = await Academics.findOne({ email: email });
    if (exists) {
      return res.json({ exists });
    } else {
      return res.status(404).json({ error: "Academics Not Found" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addAcademics = async (req, res) => {
  try {
    const { name, email, roll, college, school } = req.body;
    if (
      !name ||
      !email ||
      !roll ||
      !school.class10 ||
      !school.class12 ||
      !school.class10_board ||
      !school.class12_board
    ) {
      return res
        .status(400)
        .json({ error: "Class 10 and Class 12 feilds cannot be empty" });
    }
    const student = await Academics.findOne({ email });
    student.college = college;
    student.school = {
      class10: school.class10,
      class10_board: school.class10_board,
      class12: school.class12,
      class12_board: school.class12_board,
    };

    const done = await student.save();
    if (done) {
      return res.status(201).json({ message: "Academics Added" });
    } else {
      return res.status(400).json({ error: "Changes failed" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
exports.addTasks = async (req, res) => {
  try {
    const email = req.body.email;
    const tasks = req.body.tasks;
    if (!tasks || !email) {
      return res.status(400).json({ error: "No of the feilds can be empty" });
    }
    const student = await Tasks.findOne({ email });
    student.taskslist = tasks;
    const done = await student.save();
    if (done) {
      return res.status(201).json({ message: "Tasks Added" });
    } else {
      return res.status(400).json({ error: "Tasks Not Added" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
exports.editUser = async (req, res) => {
  try {
    const { name, email, phone, roll, branch } = req.body;
    if (!name || !email || !phone || !roll || !branch) {
      return res.status(400).json({ error: "None of the fields can be empty" });
    }
    const rollExists = await StudentLogin.findOne({ roll: roll });
    console.log("rollExists:", rollExists);
    if (!rollExists) {
      return res
        .status(404)
        .send({ message: `User with roll ${roll} not found` });
    }
    (rollExists.name = name),
      (rollExists.phone = phone),
      (rollExists.email = email);
    rollExists.branch = branch;

    const done = await rollExists.save();
    if (done) {
      return res.status(201).json({ message: "Edits Done" });
    } else {
      return res.status(400).json({ error: "Not Edited" });
    }
    // return res.json(rollExists);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
