const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

// routers
const userRouter = require("./routes/users/user.router");
const registerRouter = require("./routes/register/register.router");
const loginRouter = require("./routes/login/login.router");
const transitionRouter = require("./routes/transition/transition.router");
const accoutRouter = require("./routes/account/account.route");
const paymentRouter = require("./routes/payment/payment.router");

const port = 3001;

const app = express();
app.use(cors());
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

  res.status(200).json({ id: 1, data: "1" });
});

app.post("/notify", (req, res) => {
  console.log("reqss", req);
  console.log("req", req.body);
  // console.log("res", res);
  res.send("Ok");
});

app.use("/users", userRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/transition", transitionRouter);
app.use("/account", accoutRouter);
app.use("/payment", paymentRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
