const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("<h1>Здоровеньки були</h1>");
});

router.post("/", (request, response) => {
  response.send({ body: request.body });
});

module.exports = router;
