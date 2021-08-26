// models
const Account = require("../../models/account/account.model");

const getAccountController = async (req, res) => {
  const {
    userNameAccount,
    passwordAccount,
    champCount,
    skinCount,
    priceAccount,
  } = req.body;
  const allAccount = await Account.find({});
  console.log("all", allAccount);
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
  res.send(allAccount);
};

module.exports = getAccountController;
