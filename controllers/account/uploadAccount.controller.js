// models
const Account = require("../../models/account/account.model");

const uploadAccountController = (req, res) => {
  const {
    userNameAccount,
    passwordAccount,
    champCount,
    skinCount,
    priceAccount,
  } = req.body;
  if (userNameAccount && passwordAccount) {
    const uploadAccount = new Account({
      userNameAccount,
      passwordAccount,
      champCount,
      skinCount,
      priceAccount,
      status: true,
    });
    uploadAccount.save().then(() => console.log("Ok"));
    res.send("register success");
    return;
  }
  res.send("asss");
};

module.exports = uploadAccountController;
