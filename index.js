const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");

const app = express();
mongoose
  .connect("mongodb://localhost:27017/allInOne")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

const User = require("./model/User");
const Task = require("./model/Task");

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running at port ${port}`));
/*
  /task POST
  /task GET
  /task/:id GET
  /task/:id PATCH
  /task/:id DELETE
*/
// async function db() {
//   try {
//     const task = new Task({
//       description: "Task",
//       isCompleted: true,
//     });

//     await task.save();
//     console.log(task);
//   } catch (err) {
//     console.log(colors.red.underline.bold(err.message));
//   }
// }
// db();
