const mongoose = require("mongoose");

const StudentLoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    roll: {
      type: String,
      required: true,
      unique: true,
    },
    branch: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { strict: false }
);

const StudentLogin = mongoose.model("STLOGINUSER", StudentLoginSchema);

module.exports = StudentLogin;
