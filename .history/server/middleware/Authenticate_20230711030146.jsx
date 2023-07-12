const jwt = require("jsonwebtoken");
const Student = reuqire("../models/StudLogin.jsx");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await Student.findOne({
      id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("unauthorized");
    console.log(err);
  }
};
module.exports = authenticate;
