// libs
const express = require("express");
// controllers
const paymentController = require("../../controllers/payment/payment.controller");

var router = express.Router();

router.get("/", paymentController);

module.exports = router;
