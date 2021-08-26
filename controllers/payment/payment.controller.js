// libs
var crypto = require("crypto");
const axios = require("axios");
// models
const User = require("../../models/users/user.model");

const paymentController = async (req, res) => {
  const { username, password } = req.body;

  const partnerCode = "MOMONINT20210825";
  const accessKey = "6pac8dhFuQ751VFk";
  const requestId = `${Math.random()}`;
  const amount = "1500";
  const orderId = `${Math.random()}`;
  const orderInfo = "TIEN";
  const returnUrl = "http://localhost:3000";
  const notifyUrl = "http://localhost:3000/notify";
  const extraData = "hobaotien123@gmail.com";
  var requestType = "captureMoMoWallet";
  var rawSignature =
    "partnerCode=" +
    partnerCode +
    "&accessKey=" +
    accessKey +
    "&requestId=" +
    requestId +
    "&amount=" +
    amount +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&returnUrl=" +
    returnUrl +
    "&notifyUrl=" +
    notifyUrl +
    "&extraData=" +
    extraData;
  var signature = crypto
    .createHmac("sha256", "3b6YZZZYrcPGu2llX2vyeuQV86equ4cA")
    .update(rawSignature)
    .digest("hex");
  console.log(signature);

  //json object send to MoMo endpoint
  var body = {
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    returnUrl: returnUrl,
    notifyUrl: notifyUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
  };

  axios
    .post("https://test-payment.momo.vn/gw_payment/transactionProcessor", { ...body })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  //Create the HTTPS objects
  //   var options = {
  //     hostname: "test-payment.momo.vn",
  //     port: 443,
  //     path: "/gw_payment/transactionProcessor",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Content-Length": Buffer.byteLength(body),
  //     },
  //   };

  //   //Send the request and get the response
  //   console.log("Sending....");
  //   var req = https.request(options, (res) => {
  //     console.log(`Status: ${res.statusCode}`);
  //     console.log(`Headers: ${JSON.stringify(res.headers)}`);
  //     res.setEncoding("utf8");
  //     res.on("data", (body) => {
  //       console.log("Body");
  //       console.log(body);
  //       console.log("payURL");
  //       console.log(JSON.parse(body).payUrl);
  //     });
  //     res.on("end", () => {
  //       console.log("No more data in response.");
  //     });
  //   });

  //   req.on("error", (e) => {
  //     console.log(`problem with request: ${e.message}`);
  //   });

  //   // write data to request body
  //   req.write(body);
  //   req.end();

  res.send("register error");
};

module.exports = paymentController;
