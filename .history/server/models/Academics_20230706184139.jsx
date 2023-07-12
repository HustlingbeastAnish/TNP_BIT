const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const AcademicSchema = new mongoose.Schema(
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
    roll: {
      type: String,
      required: true,
      unique: [true, "Roll number already exists"],
    },
    college: {
      sem1: {
        type: String,
      },
      sem2: {
        type: String,
      },
      sem3: {
        type: String,
      },
      sem4: {
        type: String,
      },
      sem5: {
        type: String,
      },
      sem6: {
        type: String,
      },
      sem7: {
        type: String,
      },
      sem8: {
        type: String,
      },
    },
    school: {
      class10: {
        type: String,
      },
    },
  },
  { strict: false }
);
// Firing a function before the doc is saved to the database
// .pre and .post are the Mongoose Hooks
const Academics = mongoose.model("Academics", AcademicSchema);
module.exports = Academics;
