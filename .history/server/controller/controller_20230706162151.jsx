// controller.jsx
const StudentLogin = require("../models/StudLogin.jsx");
const Academics = require("../models/Academics.jsx");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Create of token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "tnpbit", {
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
    const academicDone = await academic.save();
    const signUp = await user.save();
    if (signUp && academicDone) {
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

exports.addAcademics = async (req, res) => {
  try {
    const { name, email, roll, college, school } = req.body;
    if (!name || !email || !roll || !school.class10 || !school.class12) {
      return res
        .status(400)
        .json({ error: "Class 10 and Class 12 feilds cannot be empty" });
    }
    const student = await Academics.findOne({ email });
    student.college = college;
    student.school = {
      class10: {
        board: class10.board,
        percentage: class10.percentage,
      },
      class12: {
        board: class12.board,
        percentage: class12.percentage,
      },
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
