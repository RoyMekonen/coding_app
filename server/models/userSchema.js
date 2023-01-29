const mongoose = require("mongoose");
// the schema of the user
const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  role: { type: String, required: true },
});
module.exports = new mongoose.model('user', UserSchema)