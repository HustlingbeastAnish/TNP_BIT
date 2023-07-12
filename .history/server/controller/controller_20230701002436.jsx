const StudentLogin = require("../models/StudLogin.jsx");
// Create of token
const maxAge = 3 * 24 * 60 * * 60
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
  const { name, email, phone, password, roll, branch } = req.body;
  if (!name || !email || !phone || !password || !roll || !branch) {
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
      phone,
      password,
      roll,
      branch,
    });

    const signUp = await user.save();
    if (signUp) {
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
      console.log(email);
      console.log(password);
      return res.status(400).json({ error: "None of the feilds can be empty" });
    }

    const emailExists = await userdb.findOne({ email: email });
    console.log(emailExists);
    if (emailExists) {
      const PassMatch = await bcrypt.compare(password, emailExists.password);

      if (!PassMatch) {
        res.status(400).json({ error: "Please Enter valid User Credentials" });
      } else {
        const token = await emailExists.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "User SignIn Successfully" });
      }
    } else {
      res.status(400).json({ error: "Please Enter valid User Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};
