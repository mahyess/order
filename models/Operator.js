const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OperatorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

module.exports = Operator = mongoose.model("operators", OperatorSchema);
