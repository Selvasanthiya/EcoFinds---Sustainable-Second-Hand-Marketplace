// // src/components/Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import { load } from "../utils/storage";

// export default function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const cart = load("eco_cart", []) || [];

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Link to="/feed" className="text-xl font-semibold text-green-700">EcoFinds</Link>
//           <nav className="hidden md:flex gap-2">
//             <Link to="/feed" className="text-sm text-gray-600 hover:text-gray-900">Feed</Link>
//             <Link to="/my" className="text-sm text-gray-600 hover:text-gray-900">My Listings</Link>
//             <Link to="/orders" className="text-sm text-gray-600 hover:text-gray-900">Previous Purchases</Link>
//           </nav>
//         </div>

//         <div className="flex items-center gap-3">
//           <Link to="/cart" className="text-sm px-3 py-1 border rounded">{`Cart (${cart.length})`}</Link>

//           {user ? (
//             <>
//               <Link to="/profile" className="text-sm text-gray-700">{user.username || user.email}</Link>
//               <button onClick={() => { logout(); navigate("/login"); }} className="text-sm px-3 py-1 bg-red-500 text-white rounded">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="text-sm px-3 py-1 border rounded">Login</Link>
//               <Link to="/signup" className="text-sm px-3 py-1 bg-green-600 text-white rounded">Sign up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }









// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { load } from "../utils/storage";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const cart = load("eco_cart", []) || [];

  // Inline styles
  const headerStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  };

  const brandStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#16a34a",
    textDecoration: "none",
  };

  const navStyle = {
    display: "flex",
    gap: "12px",
  };

  const navLinkStyle = {
    fontSize: "0.875rem",
    color: "#4b5563",
    textDecoration: "none",
    cursor: "pointer",
  };

  const navLinkHover = {
    color: "#111827",
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const buttonStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
  };

  const cartStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    textDecoration: "none",
    fontSize: "0.875rem",
    color: "#374151",
  };

  const loginButtonStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    color: "#374151",
    fontSize: "0.875rem",
    cursor: "pointer",
    textDecoration: "none",
  };

  const signupButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#16a34a",
    color: "#fff",
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ef4444",
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link to="/feed" style={brandStyle}>EcoFinds</Link>
          <nav style={navStyle} className="hidden md:flex">
            <Link to="/feed" style={navLinkStyle}>Feed</Link>
            <Link to="/my" style={navLinkStyle}>My Listings</Link>
            <Link to="/orders" style={navLinkStyle}>Previous Purchases</Link>
          </nav>
        </div>

        <div style={rightStyle}>
          <Link to="/cart" style={cartStyle}>{`Cart (${cart.length})`}</Link>

          {user ? (
            <>
              <Link to="/profile" style={navLinkStyle}>{user.username || user.email}</Link>
              <button style={logoutButtonStyle} onClick={() => { logout(); navigate("/login"); }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={loginButtonStyle}>Login</Link>
              <Link to="/signup" style={signupButtonStyle}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
