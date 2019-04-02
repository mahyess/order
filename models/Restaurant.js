const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
    // required: true
  },
  address: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      rating: {
        type: Number
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Restaurant = mongoose.model("restaurants", RestaurantSchema);
