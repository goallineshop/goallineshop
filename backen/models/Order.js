const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: [{ productId: String, quantity: Number }],
  total: Number,
  customer: { name: String, email: String, address: String },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
