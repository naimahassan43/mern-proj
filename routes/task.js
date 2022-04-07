const express = require("express");
const router = express.Router();

const {
  storeTask,
  fetchAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.post("/task", storeTask);
router.get("/task", fetchAllTasks);
router.get("/task/:id", getSingleTask);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;
