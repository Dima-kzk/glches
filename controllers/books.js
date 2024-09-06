const homePage = (request, response) => {
  response.send("<h1>Здоровеньки були</h1>");
};

const addData = (request, response) => {
  response.send({ body: request.body });
};

module.exports = {
  homePage,
  addData,
};
