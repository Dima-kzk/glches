const app = require("./app");
// const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://Chet:ZhUhEJgiQ8jHfXCl@firstcluster.gcu0u.mongodb.net/books_reader?retryWrites=true&w=majority&appName=FirstCluster";

// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     console.log("Database connect success");
//   })
//   .catch((error) => console.log(error.message));

app.listen(process.env.PORT || 4000, () =>
  console.log("server is running on " + process.env.PORT)
);
