const mongoose = require("mongoose");
const { isEmail } = require("validator");
const StudentLoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email Already Exists"],
      validate: [isEmail, "Please enter a valid email"],
    },
    phone: {
      type: Number,
      required: true,
      minlength: [10, "Phone Number must contain 10 digits"],
    },
    password: {
      type: String,
      required: true,
      // minlength: [6, "Password should be minimum of 6 characters long"],
      // maxlength: [18, "Password cannot exceed more than 18 characters"],
    },
    roll: {
      type: String,
      required: true,
      unique: [true, "Roll Number already exists"],
    },
    branch: {
      type: [String, "Branch has to be of string datatype"],
      required: true,
    },
  },
  { strict: false }
);
const StudentLogin = mongoose.model("STLOGINUSER", StudentLoginSchema);
module.exports = StudentLogin;
