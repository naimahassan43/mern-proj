const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/allInOne")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

//User Schema Create
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});
//user model
const User = mongoose.model("User", userSchema);

//Task Schema
const taskSchema = new mongoose.Schema({
  description: String,
  isCompleted: Boolean,
});
//Task Model
const Task = mongoose.model("Task", taskSchema);
