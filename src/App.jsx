// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProductFeedPage from "./pages/ProductFeedPage";
import AddProductPage from "./pages/AddProductPage";
import MyListingsPage from "./pages/MyListingsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import PurchasesPage from "./pages/PurchasesPage";
import NotFound from "./pages/NotFound";

function RequireAuth({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/feed" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/feed" element={<ProductFeedPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/add" element={<RequireAuth><AddProductPage /></RequireAuth>} />
          <Route path="/my" element={<RequireAuth><MyListingsPage /></RequireAuth>} />
          <Route path="/cart" element={<RequireAuth><CartPage /></RequireAuth>} />
          <Route path="/orders" element={<RequireAuth><PurchasesPage /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><DashboardPage /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
