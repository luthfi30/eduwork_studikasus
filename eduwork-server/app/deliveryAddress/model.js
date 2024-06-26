const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const deliveryAdressSchema = new Schema(
  {
    nama: { type: String, minlength: [3, "Name must be at least 3 characters long"], maxLength: [255, "Name must be at most 255 characters long"] },
    kelurahan: { type: String, minlength: [3, "kelurahan must be at least 3 characters long"], maxLength: [255, "kelurahan must be at most 255 characters long"] },
    kecamatan: { type: String, minlength: [3, "kecamatan must be at least 3 characters long"], maxLength: [255, "kecamatan must be at most 255 characters long"] },
    kabupaten: { type: String, minlength: [3, "kabupaten must be at least 3 characters long"], maxLength: [255, "kabupaten must be at most 255 characters long"] },
    provinsi: { type: String, minlength: [3, "provinsi must be at least 3 characters long"], maxLength: [255, "provinsi must be at most 255 characters long"] },
    detail: { type: String, minlength: [3, "detail must be at least 3 characters long"], maxLength: [1000, "detail must be at most 1000 characters long"] },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = model("DeliveryAddress", deliveryAdressSchema);
