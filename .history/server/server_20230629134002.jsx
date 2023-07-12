const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const ConnectDB = require("./connection/connection.jsx");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// Parse JSON request bodies
app.use(express.json());
// Parse cookies
app.use(cookieParser);

// CORS to avoid the cors error
var cors = require("cors");
app.use(cors());

// Morgan in the backend to generate request logs
app.use(morgan("tiny"));

dotenv.config({ path: "./.env" });
// Connection with MongoDB
ConnectDB();

app.get("/set-cookies", (req, res) => {
  res.cookie("newStudent", true, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
  res.send("brotha you got da cookies");
});
// To Load The routers
app.use("/", require("./routes/router.jsx"));

app.listen(PORT, (req, res) => {
  console.log(`Your Server in running at PORT http://localhost:${PORT}`);
});
