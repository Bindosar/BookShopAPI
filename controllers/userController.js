const { User } = require("../db/models");
const bcrypt = require("bcrypt");
exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 8;
  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    console.log(encryptedPassword);
    req.body.password = encryptedPassword;
    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User is created ! " });
  } catch (error) {
    next(error);
  }
};
