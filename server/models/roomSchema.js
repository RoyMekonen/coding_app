const mongoose = require("mongoose");
// the schema of the room block code
const RoomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  solution:{type:String}
});
module.exports = new mongoose.model("room", RoomSchema);
