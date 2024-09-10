const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
    app.listen(process.env.PORT || 4000, () =>
      console.log("server is running on " + process.env.PORT)
    );
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
