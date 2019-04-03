const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OperatorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurants"
  },
  role: {
    type: String
  }
});

module.exports = Operator = mongoose.model("operators", OperatorSchema);
