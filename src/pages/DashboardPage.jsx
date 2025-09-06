// // src/pages/DashboardPage.jsx
// import React, { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// export default function DashboardPage() {
//   const { user, updateProfile } = useAuth();
//   const [username, setUsername] = useState(user?.username || "");

//   function save() {
//     updateProfile({ username });
//     alert("Saved");
//   }

//   return (
//     <div className="bg-white p-6 rounded shadow max-w-lg">
//       <h2 className="text-xl font-semibold mb-3">User Dashboard</h2>
//       <div className="flex gap-4 items-center mb-4">
//         <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center">Avatar</div>
//         <div>
//           <div className="text-sm text-gray-600">Email</div>
//           <div className="font-medium">{user?.email}</div>
//         </div>
//       </div>

//       <div>
//         <div className="text-sm text-gray-600 mb-1">Username</div>
//         <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border p-2 rounded mb-3" />
//         <div className="flex gap-2">
//           <button onClick={save} className="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }






// src/pages/DashboardPage.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardPage() {
  const { user, updateProfile } = useAuth();
  const [username, setUsername] = useState(user?.username || "");

  function save() {
    updateProfile({ username });
    alert("Saved");
  }

  // Inline styles
  const containerStyle = {
    maxWidth: "500px",
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

  const profileContainerStyle = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    marginBottom: "16px",
  };

  const avatarStyle = {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    color: "#6b7280",
  };

  const emailLabelStyle = {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginBottom: "4px",
  };

  const emailStyle = {
    fontWeight: "500",
  };

  const inputLabelStyle = {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginBottom: "4px",
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

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>User Dashboard</h2>

      <div style={profileContainerStyle}>
        <div style={avatarStyle}>Avatar</div>
        <div>
          <div style={emailLabelStyle}>Email</div>
          <div style={emailStyle}>{user?.email}</div>
        </div>
      </div>

      <div>
        <div style={inputLabelStyle}>Username</div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <div>
          <button style={buttonStyle} onClick={save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
