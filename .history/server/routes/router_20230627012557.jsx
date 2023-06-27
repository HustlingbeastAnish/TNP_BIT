const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is the backend of TNP_BIT");
});

route.post("/api/registerStudent", controller.registerStudent);
