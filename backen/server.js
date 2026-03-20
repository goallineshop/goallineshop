const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://<user>:<password>@cluster0.mongodb.net/dropship-demo?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB bağlandı"))
  .catch(err => console.log(err));

app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/refund", require("./routes/refund"));

app.listen(5000, () => console.log("Backend çalışıyor http://localhost:5000"));
