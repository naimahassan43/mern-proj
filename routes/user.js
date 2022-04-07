const express = require("express");
const router = express.Router();

const User = require("../model/User");

//Store user info
router.post("/user", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
});
//Fetch all user data
router.get("/user", async (req, res) => {
  const users = await User.find();
  return res.json({ success: true, users });
});

//Fetch single user data
router.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  return res.json({ success: true, user });
});

//Update user
router.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({ success: true, user });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

//Delete User
router.delete("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.json({ success: true, user });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
