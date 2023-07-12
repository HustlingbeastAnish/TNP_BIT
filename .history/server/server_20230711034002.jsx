// server.jsx
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
app.use(cookieParser());

// Enable CORS
app.use(function (req, res, next) {
  // Set the allowed origin(s)
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");

  // Set the allowed headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set the allowed methods
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  // Set the value of Access-Control-Allow-Credentials to true
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});
// Morgan in the backend to generate request logs
app.use(morgan("tiny"));

dotenv.config({ path: "./.env" });
// Connection with MongoDB
ConnectDB();
// To Load The routers
app.use("/", require("./routes/router.jsx"));

app.listen(PORT, () => {
  console.log(`Your Server is running at PORT http://localhost:${PORT}`);
});
