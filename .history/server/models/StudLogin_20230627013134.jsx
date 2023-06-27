const mongoose = require("mongoose");

const StudentLoginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { strict: false }
);

const Stloginuser = mongoose.model("STLOGINUSER", StudentLoginSchema);

module.exports = Stloginuser;
