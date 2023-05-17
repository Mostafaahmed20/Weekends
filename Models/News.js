const mongoose = require("mongoose");
const gravatar = require("gravatar");
var AutoIncrement = require("mongoose-sequence")(mongoose);
const ItemSchema = mongoose.Schema({
  Myid: { type: Number },
  title: { type: String },
  Destination: { type: String },
  description: { type: String },
  category: { type: String },
  image: {
    type: String,
  },
  createdOn: { type: Date, default: Date.now },
});
ItemSchema.plugin(AutoIncrement, { id: "order_seq", inc_field: "Myid" });

const itemModel = mongoose.model("item", ItemSchema);

module.exports = itemModel;
