const Task = require("../model/Task");

//Store the tasks
exports.storeTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    return res.status(201).json({ success: true, task });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

//Fetch all task data
exports.fetchAllTasks = async (req, res) => {
  const tasks = await Task.find();
  return res.json({ success: true, tasks });
};

//Fetch single task data
exports.getSingleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }
  return res.json({ success: true, task });
};

//Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.json({ success: true, task });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

//Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.json({ success: true, task });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
