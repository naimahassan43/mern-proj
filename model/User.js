//User Schema Create
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});
//user model
const User = mongoose.model("User", userSchema);

module.exports = User;
