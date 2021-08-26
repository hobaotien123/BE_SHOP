// models
const User = require("../../models/users/user.model");

const loginController = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const findUser = await User.find({
      password: password,
      username: username,
    });
    if (findUser.length) {
      res.send("Login success");
      return;
    } else {
      res.send("Login error");
      return;
    }
  }
  res.send("register error");
};

module.exports = loginController;
