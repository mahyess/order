const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  tableNo: {
    type: String,
    required: true
  }
  customers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  // handle: {
  //   type: String,
  //   required: true,
  //   max:40 
  // },
  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "items"
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model("orders", OrderSchema);
