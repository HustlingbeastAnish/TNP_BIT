const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const StudentLoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      validate: [isEmail, "Please enter a valid email"],
    },
    phone: {
      type: Number,
      required: true,
      minlength: [10, "Phone number must contain 10 digits"],
    },
    password: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
      unique: [true, "Roll number already exists"],
    },
    branch: {
      type: String,
      required: true,
    },
  },
  { strict: false }
);
// Firing a function before the doc is saved to the database
// .pre and .post are the Mongoose Hooks
StudentLoginSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const StudentLogin = mongoose.model("STLOGINUSER", StudentLoginSchema);
module.exports = StudentLogin;
