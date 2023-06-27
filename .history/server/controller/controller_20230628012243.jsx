const StudentLogin = require("../models/StudLogin.jsx");

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
  // if (err.code === 11000) {
  //   // Check the duplicate field and assign the error message accordingly
  //   if (err.keyPattern.hasOwnProperty("email")) {
  //     errors.email = "Email already exists";
  //   } else if (err.keyPattern.hasOwnProperty("roll")) {
  //     errors.roll = "Roll number already exists";
  //   }
  //   return errors;
  // }

  // Validation errors
  if (err.message.includes("STLOGINUSER validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
exports.registerStudent = async (req, res) => {
  const { Name, email, phone, password, roll, branch } = req.body;

  if (!Name || !email || !phone || !password || !roll || !branch) {
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
      Name,
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
    if (err.code === 11000 && err.keyPattern && err.keyPattern.name) {
      // Duplicate key error for the 'name' field
      return res.status(400).json({ error: "Name already exists" });
    }
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
