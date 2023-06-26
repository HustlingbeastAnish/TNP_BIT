const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodb+srv://anishkumarsingh45:retupmoc%40tnp1@tnpdb.pqmw0hs.mongodb.net/TNP_DATABASE);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = ConnectDB;
