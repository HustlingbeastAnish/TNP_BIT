const StudentLogin = require("../models/StudLogin.jsx");

// Error Handlers
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email, phone, password, roll, branch };

  // Handling duplicate erros
  if (err.code === 11000) {
    errors.email = "Email already Exists";
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
    return res.status(400).json({ error: "Please fill in all the details" });
  }
  try {
    const userExists = await StudentLogin.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
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
    const errors = handleErrors(err);
    console.error(err);
    return res.status(500).json({ errors });
  }
};
