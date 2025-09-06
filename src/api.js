// src/api.js
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// -------------------- USERS --------------------

// Signup a new user
export const signupUser = (data) => api.post("/users/", data);

// Login user (adjust if your backend login is different)
export const loginUser = (data) => api.post("/users/login/", data);

// -------------------- PRODUCTS --------------------

// Get all products
export const fetchProducts = () => api.get("/products/");

// Get single product by ID
export const fetchProductById = (id) => api.get(`/products/${id}/`);

// Add product (requires auth token)
export const addProduct = (data, token) =>
  api.post("/products/", data, { headers: { Authorization: `Bearer ${token}` } });

// -------------------- CART --------------------

// Get user cart
export const fetchCart = (token) =>
  api.get("/cart/", { headers: { Authorization: `Bearer ${token}` } });

// Add product to cart
export const addToCart = (productId, token) =>
  api.post("/cart/", { product: productId }, { headers: { Authorization: `Bearer ${token}` } });

// Remove product from cart
export const removeFromCart = (cartItemId, token) =>
  api.delete(`/cart/${cartItemId}/`, { headers: { Authorization: `Bearer ${token}` } });

// -------------------- PURCHASES --------------------

// Get all user purchases
export const fetchPurchases = (token) =>
  api.get("/purchases/", { headers: { Authorization: `Bearer ${token}` } });

// Checkout cart
export const checkoutCart = (token) =>
  api.post("/purchases/checkout/", {}, { headers: { Authorization: `Bearer ${token}` } });

export default api;
