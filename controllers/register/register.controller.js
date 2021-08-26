// models
const User = require("../../models/users/user.model");

const registerController = (req, res) => {
  const { username, password, name, email, phone } = req.body;
  if (username && password) {
    const newUser = new User({
      name,
      username,
      password,
      email,
      phone,
      amount : 0
    });
    newUser.save().then(() => console.log("Ok"));
    res.send("register success");
    return;
  }
  res.send("register error");
};

module.exports = registerController;
