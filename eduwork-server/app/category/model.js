const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, minlength: [3, "Name must be at least 3 characters long"], required: [true, "Name is required"] },
});

module.exports = model("Category", categorySchema);
