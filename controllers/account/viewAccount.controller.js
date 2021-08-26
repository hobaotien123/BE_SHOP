// models
const Account = require("../../models/account/account.model");

const viewAccountController = async (req, res) => {
  const { idAccount } = req.body;
  const account = await Account.findById(idAccount);
  console.log("account", account);
  //   if (userNameAccount && passwordAccount) {
  //     const uploadAccount = new UploadAccount({
  //       userNameAccount,
  //       passwordAccount,
  //       champCount,
  //       skinCount,
  //       priceAccount,
  //     });
  //     uploadAccount.save().then(() => console.log("Ok"));
  //     res.send("register success");
  //     return;
  //   }
  res.send(account);
};

module.exports = viewAccountController;
