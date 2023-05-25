const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, required: true },
});
const Usermodel = mongoose.model("User", UserSchema);

module.exports = Usermodel;
