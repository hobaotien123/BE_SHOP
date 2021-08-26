// models
const Account = require("../../models/account/account.model");

const editAccountController = (req, res) => {
  const { idAccount, userNameAccount, passwordAccount } = req.body;
  Account.findOneAndUpdate(
    idAccount,
    {
      userNameAccount,
      passwordAccount,
    },
    (err) => {
      if (!err) {
        console.log("Edit account success");
      }
    }
  );
  res.send("asss");
};

module.exports = editAccountController;
