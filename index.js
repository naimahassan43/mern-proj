const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/allInOne")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

const User = require("./model/User");
const Task = require("./model/Task");
