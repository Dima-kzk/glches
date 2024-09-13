const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const booksRouter = require("./routes/api/books");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/api/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// app.use((error, request, response, next) => {
//   error.message = error.status === undefined ? "Server error" : error.message;
//   const { status = 500, message } = error;
//   response.status(status).json({ message });
// });

app.use((error, request, response, next) => {
  const { status = 500, message = "Server error" } = error;
  response.status(status).json({ message });
});

module.exports = app;
