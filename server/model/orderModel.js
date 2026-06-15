const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shirtId: { type: Number, required: true },
  shirtName: { type: String, required: true },
  shirtIcon: { type: String, required: true },
  shopName: { type: String, required: true },
  imageNumber: { type: Number },
  customerEmail: { type: String },
  price: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  status: { type: String, default: 'Confirmed' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
