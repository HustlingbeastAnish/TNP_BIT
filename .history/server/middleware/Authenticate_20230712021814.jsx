const jwt = require("jsonwebtoken");
const StudentLogin = require("../models/StudLogin.jsx");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    console.log(token); // Access the token from the cookies
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken._id);
    const rootUser = await StudentLogin.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
    console.log(err);
  }
};

module.exports = Authenticate;
