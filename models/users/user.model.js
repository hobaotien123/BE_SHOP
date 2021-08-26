const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  phone: String,
  amount: Number,
});

var User = mongoose.model("User", userSchema, "users");

module.exports = User;
