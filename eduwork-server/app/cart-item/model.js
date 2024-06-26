const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const cartItemSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name must be at least 3 characters long"],
      required: [true, "Name is required"],
    },
    qty: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    price: {
      type: Number,
      default: 0,
    },
    image_url: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

module.exports = model("CartItem", cartItemSchema);
