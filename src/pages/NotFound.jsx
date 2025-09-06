// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-3">Page not found</h2>
      <Link to="/feed" className="text-sm text-blue-600">Go to feed</Link>
    </div>
  );
}
