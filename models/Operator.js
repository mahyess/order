const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OperatorSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurants"
  },
  role: {
    type: String
  }
});

module.exports = Operator = mongoose.model("operators", OperatorSchema);
