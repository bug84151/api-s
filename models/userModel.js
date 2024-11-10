const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a Username"],
  },
  password: {
    type: Number,
    required: [true, "Please enter a Password"],
  },
});