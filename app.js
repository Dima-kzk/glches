const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("<h1>Здоровеньки були</h1>");
});

app.post("/", (request, response) => {
  response.send({ body: request.body });
});

module.exports = app;
