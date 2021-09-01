const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// userSchema which would incude name, email, dob
const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("UserSchema", userSchema);
