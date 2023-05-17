// create agent model
const mongoose = require("mongoose");
var AutoIncrement = require("mongoose-sequence")(mongoose);
const TeamSchema = mongoose.Schema({
  Myid: { type: Number },
  pic: { type: String },
  name: { type: String },
  Account: { type: String },
  email: { type: String },
  Sfid: { type: String },
  contact: { type: String },
});
TeamSchema.plugin(AutoIncrement, { Userid: "order_seq", inc_field: "Myid" });
const TeamModel = mongoose.model("team", TeamSchema);

module.exports = TeamModel;
