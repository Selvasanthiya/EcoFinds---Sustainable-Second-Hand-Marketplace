// // src/pages/SignupPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function SignupPage() {
//   const { register } = useAuth();
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState(null);

//   const handle = (e) => {
//     e.preventDefault();
//     const res = register({ email, password, username });
//     if (!res.ok) setMsg(res.message);
//     else nav("/feed");
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded p-6 shadow">
//       <h2 className="text-xl font-semibold mb-3">Sign up</h2>
//       <form onSubmit={handle} className="space-y-3">
//         <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
//         <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full border p-2 rounded" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 rounded" />
//         <button className="px-4 py-2 bg-green-600 text-white rounded">Create account</button>
//         {msg && <div className="text-sm text-red-600">{msg}</div>}
//       </form>
//     </div>
//   );
// }




// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function SignupPage() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handle = (e) => {
    e.preventDefault();
    const res = register({ email, password, username });
    if (!res.ok) setMsg(res.message);
    else nav("/feed");
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#22c55e",
    color: "#fff",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const msgStyle = {
    marginTop: "10px",
    color: "red",
    fontSize: "0.9rem",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign up</h2>
      <form onSubmit={handle}>
        <input
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button style={buttonStyle}>Create account</button>
        {msg && <div style={msgStyle}>{msg}</div>}
      </form>
    </div>
  );
}
