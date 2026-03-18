const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Yeni sipariş oluştur
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Sipariş alındı", order });
});

module.exports = router;
