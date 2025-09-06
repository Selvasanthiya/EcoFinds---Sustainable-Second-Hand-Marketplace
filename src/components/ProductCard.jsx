// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  // Inline styles
  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.2s",
    cursor: "pointer",
  };

  const imageStyle = {
    height: "160px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#6b7280",
  };

  const titleStyle = {
    fontWeight: "600",
    fontSize: "1rem",
    marginBottom: "4px",
  };

  const categoryStyle = {
    fontSize: "0.85rem",
    color: "#6b7280",
  };

  const bottomStyle = {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const priceStyle = {
    fontWeight: "700",
    fontSize: "1rem",
    color: "#16a34a",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "8px",
  };

  const viewButtonStyle = {
    padding: "6px 12px",
    fontSize: "0.85rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    color: "#374151",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  };

  const addButtonStyle = {
    padding: "6px 12px",
    fontSize: "0.85rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={imageStyle}>Image</div>
      <div style={{ flex: 1 }}>
        <h3 style={titleStyle}>{product.title}</h3>
        <div style={categoryStyle}>{product.category}</div>
      </div>
      <div style={bottomStyle}>
        <div style={priceStyle}>${product.price}</div>
        <div style={buttonContainerStyle}>
          <Link to={`/product/${product.id}`} style={viewButtonStyle}>View</Link>
          <button style={addButtonStyle} onClick={() => onAddToCart && onAddToCart(product)}>Add</button>
        </div>
      </div>
    </div>
  );
}






