const express = require("express");

const ctrl = require("../../controllers/books");

const router = express.Router();

router.get("/", ctrl.homePage);

router.post("/", ctrl.addData);

module.exports = router;
