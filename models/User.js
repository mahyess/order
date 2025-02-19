const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true
  },
  firstName: {
    type: String
    // required: true
  },
  lastName: {
    type: String
    // required: true
  },
  avatar: {
    type: String
  },
  email: {
    type: String
    // required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String
    // required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
