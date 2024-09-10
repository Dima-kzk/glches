const app = require("./app");
const mongoose = require("mongoose");

// const { DB_HOST } = require("./config");

// console.log(process.env.DB_HOST);

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(process.env.PORT || 3000, () =>
      console.log("server is running on " + process.env.PORT)
    );
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
