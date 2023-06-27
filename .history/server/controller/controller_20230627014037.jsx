var StudentLogin = require("../models/StudLogin");

exports.registerStudent = async (req, res) => {
  const { name, email, password, roll, branch } = req.body;
  if (!name || !email || !password || !roll || !branch) {
    res.status(400).json({ error: "fill all details" });
    console.log("None of the fields can be empty");
  }
  try {
    const userExists = await StudentLogin.findOne({ email });
    if (userExists) {
      res.status(400).json({ error: "User with email already exists" });
    }
    const user = new StudentLogin({
      name,
      email,
      password,
    });
    const signUp = await user.save();
    if (signUp) {
      res.status(201).json({ message: "Registration Successful" });
    } else {
      res.status(400).json({ error: "Registration Failed" });
    }
  } catch (err) {
    console.log(err);
  }
};
