// controller.jsx
const StudentLogin = require("../models/StudLogin.jsx");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Create token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "tnpbit", {
    expiresIn: maxAge,
  });
};

exports.registerStudent = async (req, res) => {
  const { name, email, phone, password, roll, branch } = req.body;
  console.log("Registering");
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
  console.log("Login");
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
        return res.json({ message: "User SignIn Successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log("Failed");
    return res.status(400).json({ error: "Invalid credentials1" });
  }
};
