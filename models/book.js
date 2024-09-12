const { Schema, model } = require("mongoose");

const bookSchems = new Schema({
  title: String,
  author: String,
});

const Book = model("book", bookSchems);

module.exports = Book;
