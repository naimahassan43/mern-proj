const mongoose = require("mongoose");

//Task Schema
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
//Task Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
