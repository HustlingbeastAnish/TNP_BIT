const mongoose = require("mongoose");

const StudentLoginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
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
    },
  },
  { strict: false }
);

const StudentLogin = mongoose.model("STLOGINUSER", StudentLoginSchema);

module.exports = StudentLogin;
