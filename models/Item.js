const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
    // required: true
  },
  amounts: [
    {
      restaurant: {
        type: Schema.Types.ObjectId,
        ref: "restaurants"
      },
      amountInPaisa: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Item = mongoose.model("items", ItemSchema);
