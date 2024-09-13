const { Book } = require("../models/book");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (request, response) => {
  const result = await Book.find();
  response.json(result);
};

const add = async (request, response) => {
  const result = await Book.create(request.body);
  response.status(201).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
};
