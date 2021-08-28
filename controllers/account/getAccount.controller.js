// models
const Account = require("../../models/account/account.model");

const getAccountController = async (req, res) => {
  const allAccount = await Account.find({});
  res.status(200).json({
    body: {
      accountList: allAccount,
    },
  });
};

module.exports = getAccountController;
