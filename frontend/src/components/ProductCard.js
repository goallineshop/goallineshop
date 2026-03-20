import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} TL</p>
      <button>Sepete Ekle</button>
    </div>
  );
}
