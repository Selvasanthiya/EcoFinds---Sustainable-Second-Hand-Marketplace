// src/pages/ProductDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { load, save } from "../utils/storage";
import { useAuth } from "../contexts/AuthContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const p = (load("eco_products", []) || []).find((x) => x.id === id);
    setProduct(p || null);
  }, [id]);

  if (!product)
    return (
      <div style={{
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
      }}>
        Product not found
      </div>
    );

  const addToCart = () => {
    if (!user) return navigate("/login");
    const cart = load("eco_cart", []) || [];
    if (!cart.includes(product.id)) {
      cart.push(product.id);
      save("eco_cart", cart);
      alert("Added to cart");
    } else alert("Already in cart");
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const backButtonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    marginBottom: "16px",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
  };

  const contentStyle = {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  };

  const imageStyle = {
    width: "320px",
    height: "240px",
    backgroundColor: "#f3f4f6",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#6b7280",
  };

  const infoStyle = {
    flex: "1",
    minWidth: "250px",
  };

  const titleStyle = {
    fontSize: "1.75rem",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const categoryStyle = {
    fontSize: "0.9rem",
    color: "#6b7280",
    marginBottom: "8px",
  };

  const priceStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    marginBottom: "16px",
  };

  const descriptionStyle = {
    marginBottom: "16px",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "12px",
  };

  const addButtonStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  };

  const buyButtonStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#16a34a",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <button style={backButtonStyle} onClick={() => navigate(-1)}>Back</button>
      <div style={contentStyle}>
        <div style={imageStyle}>Image</div>
        <div style={infoStyle}>
          <h2 style={titleStyle}>{product.title}</h2>
          <div style={categoryStyle}>{product.category}</div>
          <div style={priceStyle}>${product.price}</div>
          <p style={descriptionStyle}>{product.description}</p>
          <div style={buttonContainerStyle}>
            <button style={addButtonStyle} onClick={addToCart}>Add to cart</button>
            <button style={buyButtonStyle} onClick={() => { addToCart(); navigate("/cart"); }}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
