// libs
const express = require("express");
// controllers
const loginController = require("../../controllers/login/login.controller");

var router = express.Router();

router.post("/", loginController);

module.exports = router;
