// // src/pages/MyListingsPage.jsx
// import React, { useEffect, useState } from "react";
// import { load, save } from "../utils/storage";
// import { useAuth } from "../contexts/AuthContext";
// import { Link } from "react-router-dom";

// export default function MyListingsPage() {
//   const { user } = useAuth();
//   const [mine, setMine] = useState([]);

//   useEffect(() => {
//     const all = load("eco_products", []) || [];
//     setMine(all.filter(p => user && p.userId === user.id));
//   }, [user]);

//   function remove(id) {
//     if (!confirm("Delete listing?")) return;
//     const all = (load("eco_products", []) || []).filter(p => p.id !== id);
//     save("eco_products", all);
//     setMine(all.filter(p => user && p.userId === user.id));
//   }

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold">My Listings</h2>
//         <Link to="/add" className="px-3 py-1 bg-green-600 text-white rounded">+ Add</Link>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {mine.length === 0 && <div className="col-span-full p-6 bg-white border rounded">No listings yet</div>}
//         {mine.map(p => (
//           <div key={p.id} className="bg-white border rounded p-3">
//             <div className="h-28 bg-gray-100 mb-2 flex items-center justify-center">Image</div>
//             <div className="font-semibold">{p.title}</div>
//             <div className="text-sm text-gray-600">${p.price}</div>
//             <div className="mt-2 flex gap-2">
//               <Link to={`/product/${p.id}`} className="px-2 py-1 border rounded">View</Link>
//               <button onClick={() => remove(p.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






// src/pages/MyListingsPage.jsx
import React, { useEffect, useState } from "react";
import { load, save } from "../utils/storage";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function MyListingsPage() {
  const { user } = useAuth();
  const [mine, setMine] = useState([]);

  useEffect(() => {
    const all = load("eco_products", []) || [];
    setMine(all.filter(p => user && p.userId === user.id));
  }, [user]);

  function remove(id) {
    if (!confirm("Delete listing?")) return;
    const all = (load("eco_products", []) || []).filter(p => p.id !== id);
    save("eco_products", all);
    setMine(all.filter(p => user && p.userId === user.id));
  }

  // Inline styles
  const containerStyle = {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "16px",
    boxSizing: "border-box",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
  };

  const addButtonStyle = {
    padding: "8px 16px",
    borderRadius: "8px",
    backgroundColor: "#16a34a",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "16px",
  };

  const emptyStyle = {
    gridColumn: "1 / -1",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    textAlign: "center",
    color: "#6b7280",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    padding: "12px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    height: "112px",
    backgroundColor: "#f3f4f6",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#6b7280",
  };

  const titleStyle = {
    fontWeight: "600",
  };

  const priceStyle = {
    fontSize: "0.9rem",
    color: "#6b7280",
  };

  const buttonContainerStyle = {
    marginTop: "8px",
    display: "flex",
    gap: "8px",
  };

  const viewButtonStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    textDecoration: "none",
    color: "#374151",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "center",
  };

  const deleteButtonStyle = {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ef4444",
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>My Listings</h2>
        <Link to="/add" style={addButtonStyle}>+ Add</Link>
      </div>

      <div style={gridStyle}>
        {mine.length === 0 && <div style={emptyStyle}>No listings yet</div>}
        {mine.map(p => (
          <div key={p.id} style={cardStyle}>
            <div style={imageStyle}>Image</div>
            <div style={titleStyle}>{p.title}</div>
            <div style={priceStyle}>${p.price}</div>
            <div style={buttonContainerStyle}>
              <Link to={`/product/${p.id}`} style={viewButtonStyle}>View</Link>
              <button style={deleteButtonStyle} onClick={() => remove(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
