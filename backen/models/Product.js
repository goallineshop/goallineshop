const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: 0.00.00.000.001,
  image: String,
});

module.exports = mongoose.model("Product", ProductSchema);
