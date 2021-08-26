// models
const Account = require("../../models/account/account.model");
const Transition = require("../../models/transition/transition.model");
const User = require("../../models/users/user.model");

const transitionController = async (req, res) => {
  const { userId, idAccount } = req.body;
  if (userId && idAccount) {
    const { amount } = await User.findById(userId);
    const { userNameAccount, passwordAccount, priceAccount, status } =
      await Account.findById(idAccount);

    if (!status) {
      res.send("Account đã bán");
      return;
    }

    if (amount >= priceAccount) {
      User.findOneAndUpdate(
        userId,
        { amount: amount - priceAccount },
        (err) => {
          if (!err) {
            console.log("Đã trừ tiền");
          }
        }
      );
      Account.findOneAndUpdate(
        idAccount,
        {
          status: false,
        },
        (err) => {
          if (!err) {
            console.log("Update account");
          }
        }
      );
      const transition = new Transition({
        userId,
        accountId: idAccount,
      });
      transition.save().then(() => console.log("Ok"));
      res.send(`Account: id: ${userNameAccount} pass: ${passwordAccount}`);
      return;
    }
  }
  res.send("Bạn không đủ tiền");
};

module.exports = transitionController;
