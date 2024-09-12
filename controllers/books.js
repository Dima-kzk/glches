const Book = require("../models/book");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (request, response) => {
  const result = await Book.find();
  response.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
