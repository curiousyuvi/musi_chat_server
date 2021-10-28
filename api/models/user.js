const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  phoneNumber: String,
  name: String,
  avatarURL: String,
});

module.exports = mongoose.model("User", userSchema);
