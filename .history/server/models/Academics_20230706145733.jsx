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
        type: Double,
      },
      sem2: {
        type: Number,
      },
      sem3: {
        type: Number,
      },
      sem4: {
        type: Number,
      },
      sem5: {
        type: Number,
      },
      sem6: {
        type: Number,
      },
      sem7: {
        type: Number,
      },
      sem8: {
        type: Number,
      },
    },
    school: {
      class10: {
        type: Number,
      },
      class12: {
        type: Number,
      },
      sem3: {
        type: Number,
      },
      sem4: {
        type: Number,
      },
      sem5: {
        type: Number,
      },
      sem6: {
        type: Number,
      },
      sem7: {
        type: Number,
      },
      sem8: {
        type: Number,
      },
    },
  },
  { strict: false }
);
// Firing a function before the doc is saved to the database
// .pre and .post are the Mongoose Hooks
const Academics = mongoose.model("Academics", AcademicSchema);
module.exports = Academics;
