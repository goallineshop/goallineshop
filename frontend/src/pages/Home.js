import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "../api";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Ürünler</h1>
      <div className="product-grid">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
