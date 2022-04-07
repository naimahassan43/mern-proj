const express = require("express");
const router = express.Router();

const Task = require("../model/Task");

//Store the tasks
router.post("/task", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    return res.status(201).json({ success: true, task });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});

//Fetch all task data
router.get("/task", async (req, res) => {
  const tasks = await Task.find();
  return res.json({ success: true, tasks });
});

//Fetch single task data
router.get("/task/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }
  return res.json({ success: true, task });
});

//Update Task
router.patch("/task/:id", async (req, res) => {
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
});

//Delete Task
router.delete("/task/:id", async (req, res) => {
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
});

module.exports = router;
