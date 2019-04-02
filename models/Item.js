const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  amountInPaisa: {
    type: Number,
    required: true
  },
  description: {
    type: String
    // required: true
  }
});

module.exports = Item = mongoose.model("items", ItemSchema);