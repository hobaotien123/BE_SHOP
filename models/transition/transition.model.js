const mongoose = require("mongoose");

var transitionSchema = new mongoose.Schema({
  userId: String,
  accountId: String,
});

var Transition = mongoose.model("Transitions", transitionSchema, "transitions");

module.exports = Transition;
