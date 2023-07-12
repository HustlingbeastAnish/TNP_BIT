const mongoose = require("mongoose");
const { isEmail } = require("validator");
const TasksSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      validate: [isEmail, "Please enter a valid email"],
    },
    roll: {
      type: String,
      required: true,
      unique: [true, "Roll number already exists"],
    },
  },
  { strict: false }
);
// Firing a function before the doc is saved to the database
// .pre and .post are the Mongoose Hooks
const Academics = mongoose.model("Tasks", AcademicSchema);
module.exports = Academics;
