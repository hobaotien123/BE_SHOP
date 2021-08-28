const mongoose = require("mongoose");

var accountSchema = new mongoose.Schema({
  userNameAccount: String,
  passwordAccount: String,
  champCount: Number,
  skinCount: Number,
  priceAccount: Number,
  status: Boolean,
  images: Array,
});

var Account = mongoose.model(
  "account",
  accountSchema,
  "account"
);

module.exports = Account;
