// libs
const express = require("express");
// controllers
const getAccountController = require("../../controllers/account/getAccount.controller");
const uploadAccountController = require("../../controllers/account/uploadAccount.controller");
const editAccountController = require("../../controllers/account/editAccount.controller");
const viewAccountController = require("../../controllers/account/viewAccount.controller");

var router = express.Router();

router.post("/", getAccountController);
router.post("/upload", uploadAccountController);
router.post("/edit", editAccountController);
router.post("/view", viewAccountController);

module.exports = router;
