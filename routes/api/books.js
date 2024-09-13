const express = require("express");

const ctrl = require("../../controllers/books");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/book");

const router = express.Router();

router.get("/", ctrl.getAll);

router.post("/", validateBody(schemas.addShema), ctrl.add);

module.exports = router;
