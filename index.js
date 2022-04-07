const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/allInOne")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.error(err));

const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");

app.use(userRoutes);
app.use(taskRoutes);

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is running at port ${port}`));
/*
  /task POST
  /task GET
  /task/:id GET
  /task/:id PATCH
  /task/:id DELETE
*/
