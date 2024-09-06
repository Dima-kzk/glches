const express = require("express");
const booksRouter = require("./routes/api/books");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api/books", booksRouter);

module.exports = app;
