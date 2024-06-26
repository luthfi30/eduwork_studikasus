const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, minlength: [3, "Name must be at least 3 characters long"], required: [true, "Name is required"] },
    description: { type: String, maxlength: [1000, "Description must be at most 1000 characters long"] },
    price: { type: Number, default: 0 },
    image_url: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
