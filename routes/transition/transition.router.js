// libs
const express = require("express");
// controllers
const transitionController = require("../../controllers/transition/transition.controller");

var router = express.Router();

router.post("/", transitionController);

module.exports = router;
