const express = require("express");

const ctrl = require("../../controllers/books");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/book");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addShema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addShema), ctrl.updateById);

module.exports = router;
