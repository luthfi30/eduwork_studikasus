const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const tagSchema = new Schema({
  name: { type: String, minlength: [3, "Name must be at least 3 characters long"], required: [true, "Name is required"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Tag", tagSchema);
