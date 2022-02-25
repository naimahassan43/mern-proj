//Task Schema
const taskSchema = new mongoose.Schema({
  description: String,
  isCompleted: Boolean,
});
//Task Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
