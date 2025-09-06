import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });
    if (!res.ok) setMsg(res.message);
    else navigate("/feed");
  };

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(to bottom right, #d1fae5, #a7f3d0, #bfdbfe)",
    paddingTop: "80px", // space for fixed navbar
  };

  const navStyle = {
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    zIndex: 50,
  };

  const logoStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#16a34a",
    letterSpacing: "1px",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "24px",
  };

  const linkStyle = {
    color: "#374151",
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#16a34a",
  };

  const cardContainerStyle = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 16px",
    marginTop: "24px",
  };

  const cardStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    overflow: "hidden",
  };

  const circleStyle1 = {
    position: "absolute",
    top: "-64px",
    right: "-64px",
    width: "160px",
    height: "160px",
    backgroundColor: "#bbf7d0",
    borderRadius: "50%",
    opacity: 0.5,
  };

  const circleStyle2 = {
    position: "absolute",
    bottom: "-64px",
    left: "-64px",
    width: "160px",
    height: "160px",
    backgroundColor: "#bfdbfe",
    borderRadius: "50%",
    opacity: 0.5,
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#16a34a",
    marginBottom: "32px",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "16px",
    marginBottom: "16px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#16a34a",
    color: "#fff",
    borderRadius: "16px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
    border: "none",
    transition: "all 0.3s",
  };

  const msgStyle = {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "8px",
    textAlign: "center",
  };

  const infoStyle = {
    marginTop: "24px",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#6b7280",
  };

  const demoStyle = {
    marginTop: "16px",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "#6b7280",
    fontStyle: "italic",
  };

  return (
    <div style={pageStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <h1 style={logoStyle}>EcoFinds</h1>
        <div style={linkContainerStyle}>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
          <Link
            to="/signup"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Login Card */}
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={circleStyle1}></div>
          <div style={circleStyle2}></div>

          <h2 style={headingStyle}>Login to EcoFinds</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={inputStyle}
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={inputStyle}
              required
            />
            {msg && <div style={msgStyle}>{msg}</div>}

            <button style={buttonStyle}>Login</button>
          </form>

          <div style={infoStyle}>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#16a34a", fontWeight: "500", textDecoration: "underline" }}
            >
              Sign Up
            </Link>
          </div>

          <div style={demoStyle}>
            Demo account: <span style={{ fontWeight: "500" }}>alice@example.com / pass123</span>
          </div>
        </div>
      </div>
    </div>
  );
}
