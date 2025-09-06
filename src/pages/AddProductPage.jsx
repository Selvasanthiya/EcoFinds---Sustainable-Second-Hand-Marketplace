// src/pages/AddProductPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { load, save } from "../utils/storage";
import { useAuth } from "../contexts/AuthContext";

const CATEGORIES = ["Clothing", "Electronics", "Books", "Home", "Toys", "Other"];

export default function AddProductPage() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  function submit() {
    if (!title || !price) return alert("Title and price required");
    const all = load("eco_products", []) || [];
    const id = "p_" + Math.random().toString(36).slice(2, 9);
    const product = { id, userId: user ? user.id : null, title, description: desc, category, price: Number(price) };
    all.unshift(product);
    save("eco_products", all);
    nav("/my");
  }

  // Inline styles
  const containerStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "16px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "112px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#16a34a",
    color: "#fff",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#fff",
    border: "1px solid #d1d5db",
    color: "#374151",
  };

  const backButtonStyle = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "16px",
    cursor: "pointer",
    backgroundColor: "#f9fafb",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "12px",
  };

  return (
    <div style={containerStyle}>
      <button style={backButtonStyle} onClick={() => nav(-1)}>
        Back
      </button>
      <h2 style={headingStyle}>Add New Product</h2>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Product title"
          style={inputStyle}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          style={textareaStyle}
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
          style={inputStyle}
        />
        <div style={buttonContainerStyle}>
          <button style={submitButtonStyle} onClick={submit}>
            Submit listing
          </button>
          <button style={cancelButtonStyle} onClick={() => nav("/feed")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
