// models
const Account = require("../../models/account/account.model");

const viewAccountController = async (req, res) => {
  const { idAccount } = req.body;
  const account = await Account.findById(idAccount);
  console.log("account", account);
  res.status(200).json({
    body: {
      account,
    },
  });
};

module.exports = viewAccountController;
