const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var crypto = require("crypto");
const https = require("https");

// routers
const userRouter = require("./routes/users/user.router");
const registerRouter = require("./routes/register/register.router");
const loginRouter = require("./routes/login/login.router");
const transitionRouter = require("./routes/transition/transition.router");
const accoutRouter = require("./routes/account/account.route");

const port = 3000;

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const uri =
  "mongodb+srv://hobaotien:Baotien1410@cluster0.ktgtw.mongodb.net/DemoMogoDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection database error:"));
db.once("open", function () {
  console.log("Connect Database");
});
app.post("/", (req, res) => {
  console.log("req", req.body);

  // console.log("res", res);
  res.send("Ok");
});

app.post("/notify", (req, res) => {
  console.log("reqss", req);
  console.log("req", req.body);
  // console.log("res", res);
  res.send("Ok");
});
app.get("/test", (req, res) => {
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
  var body = JSON.stringify({
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
  });
  //Create the HTTPS objects
  var options = {
    hostname: "test-payment.momo.vn",
    port: 443,
    path: "/gw_payment/transactionProcessor",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
  };

  //Send the request and get the response
  console.log("Sending....");
  var req = https.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", (body) => {
      console.log("Body");
      console.log(body);
      console.log("payURL");
      console.log(JSON.parse(body).payUrl);
    });
    res.on("end", () => {
      console.log("No more data in response.");
    });
  });

  req.on("error", (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(body);
  req.end();
});

app.use("/users", userRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/transition", transitionRouter);
app.use("/account", accoutRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
