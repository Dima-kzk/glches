const { Book } = require("../models/book");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (request, response) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  response.json(result);
};

const getById = async (request, response) => {
  const { id } = request.params;
  // const result = await Book.findOne({ _id: id });
  const result = await Book.findById(id);
  if (!result) throw HttpError(404, "Not found");
  response.json(result);
};

const add = async (request, response) => {
  const result = await Book.create(request.body);
  response.status(201).json(result);
};

const updateById = async (request, response) => {
  const { id } = request.params;
  const result = await Book.findByIdAndUpdate(id, request.body, { new: true });
  if (!result) throw HttpError(404, "Not found");
  response.json(result);
};

// const updateFavorite = async (request, response) => {
//   const { id } = request.params;
//   const result = await Book.findByIdAndUpdate(id, request.body, { new: true });
//   if (!result) throw HttpError(404, "Not found");
//   response.json(result);
// };

const deleteById = async (request, response) => {
  const { id } = request.params;
  // const result = await Book.findByIdAndDelete(id);
  const result = await Book.findByIdAndRemove(id);
  if (!result) throw HttpError(404, "Not found");
  // response.status(204).send();
  response.json({ message: "Delete success" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getById: ctrlWrapper(getById),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
