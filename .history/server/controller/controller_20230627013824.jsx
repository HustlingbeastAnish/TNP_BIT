var StudentLogin = require("../models/StudLogin");

exports.registerStudent = async (req, res) => {
    const { name, email, password, roll, branch } = req.body;
    if (!name || !email || !password || !roll || !branch)
};
