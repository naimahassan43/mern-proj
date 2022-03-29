const mongoose = require("mongoose");
const colors = require("colors");

mongoose
  .connect("mongodb://localhost:27017/allInOne")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

const User = require("./model/User");
const Task = require("./model/Task");

async function db() {
  try {
    const task = new Task({
      description: "Task",
      isCompleted: true,
    });

    await task.save();
    console.log(task);
  } catch (err) {
    console.log(colors.red.underline.bold(err.message));
  }
}
db();
