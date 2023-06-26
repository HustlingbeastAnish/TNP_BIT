const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
// const connectDB = require("./server/database/connection");
const morgan = require("morgan");
const dotenv = require("dotenv");
// const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

// CORS to avoid the cors error
var cors = require("cors");
app.use(cors());

// Morgan to log server loading times
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Welcome to the backend of TNP_BIT");
});

app.listen(PORT, (req, res) => {
  console.log(`Your Server in running at PORT ${PORT}`);
});
