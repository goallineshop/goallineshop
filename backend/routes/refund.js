const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// İade talebi
router.post("/:orderId", async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) return res.status(404).json({ error: "Sipariş bulunamadı" });

  order.status = "refunded";
  await order.save();
  res.json({ message: "İade yapıldı", order });
});

module.exports = router;
