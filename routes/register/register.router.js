// libs
const express = require("express");
// controllers
const registerController = require("../../controllers/register/register.controller");
var router = express.Router();

router.post("/", registerController);

module.exports = router;
