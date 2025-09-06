// // import React, { useEffect, useState } from "react";
// // import { load } from "../utils/storage";

// // export default function PurchasesPage() {
// //   const [orders, setOrders] = useState([]);
// //   const products = load("eco_products", []) || [];

// //   useEffect(() => {
// //     const o = load("eco_orders", []) || [];
// //     setOrders(o);
// //   }, []);

// //   // Inline styles
// //   const containerStyle = {
// //     maxWidth: "900px",
// //     margin: "40px auto",
// //     padding: "16px",
// //     boxSizing: "border-box",
// //   };

// //   const headingStyle = {
// //     fontSize: "1.5rem",
// //     fontWeight: "600",
// //     marginBottom: "16px",
// //   };

// //   const emptyStyle = {
// //     backgroundColor: "#fff",
// //     padding: "16px",
// //     borderRadius: "12px",
// //     textAlign: "center",
// //     color: "#6b7280",
// //   };

// //   const orderCardStyle = {
// //     backgroundColor: "#fff",
// //     padding: "16px",
// //     borderRadius: "12px",
// //     marginBottom: "16px",
// //     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
// //   };

// //   const orderHeaderStyle = {
// //     fontSize: "0.875rem",
// //     color: "#6b7280",
// //     marginBottom: "8px",
// //   };

// //   const itemsGridStyle = {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
// //     gap: "8px",
// //     marginTop: "8px",
// //   };

// //   const itemStyle = {
// //     padding: "8px",
// //     border: "1px solid #d1d5db",
// //     borderRadius: "8px",
// //     backgroundColor: "#f9fafb",
// //     fontSize: "0.875rem",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <h2 style={headingStyle}>Previous Purchases</h2>
// //       {orders.length === 0 && <div style={emptyStyle}>No previous purchases</div>}
// //       <div>
// //         {orders.map(o => (
// //           <div key={o.id} style={orderCardStyle}>
// //             <div style={orderHeaderStyle}>
// //               Order: {o.id} — {new Date(o.date).toLocaleString()}
// //             </div>
// //             <div style={itemsGridStyle}>
// //               {o.items.map(id => {
// //                 const p = products.find(x => x.id === id);
// //                 if (!p) return null;
// //                 return (
// //                   <div key={id} style={itemStyle}>
// //                     {p.title} — ${p.price}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }




// // src/pages/PurchasesPage.jsx
// import React, { useEffect, useState } from "react";
// import { fetchPurchases } from "../api.js";
// import { useAuth } from "../contexts/AuthContext";

// export default function PurchasesPage() {
//   const { user, token } = useAuth();
//   const [purchases, setPurchases] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) return;
//     fetchPurchases(token)
//       .then((res) => {
//         setPurchases(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [user, token]);

//   if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading purchases...</p>;
//   if (purchases.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>You have no purchases yet.</p>;

//   // Inline styles
//   const containerStyle = { maxWidth: "900px", margin: "40px auto", padding: "16px" };
//   const headingStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "20px", textAlign: "center" };
//   const orderCardStyle = {
//     backgroundColor: "#fff",
//     padding: "16px",
//     borderRadius: "12px",
//     marginBottom: "16px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//   };
//   const orderHeaderStyle = { fontSize: "0.9rem", color: "#6b7280", marginBottom: "8px" };
//   const itemStyle = {
//     padding: "8px",
//     border: "1px solid #d1d5db",
//     borderRadius: "8px",
//     backgroundColor: "#f9fafb",
//     fontSize: "0.9rem",
//     marginBottom: "4px",
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>My Purchases</h2>
//       {purchases.map((purchase) => (
//         <div key={purchase.id} style={orderCardStyle}>
//           <div style={orderHeaderStyle}>
//             Order ID: {purchase.id} — {new Date(purchase.created_at).toLocaleDateString()}
//           </div>
//           {purchase.items.map((item) => (
//             <div key={item.id} style={itemStyle}>
//               {item.product.title} — ${item.product.price}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }



// src/pages/PurchasesPage.jsx
import React, { useEffect, useState } from "react";
import { fetchPurchases } from "../api.js";
import { useAuth } from "../contexts/AuthContext";

export default function PurchasesPage() {
  const { user, token } = useAuth();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetchPurchases(token)
      .then((res) => {
        setPurchases(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user, token]);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading purchases...</p>;
  if (purchases.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>You have no purchases yet.</p>;

  // Inline styles
  const containerStyle = { maxWidth: "900px", margin: "40px auto", padding: "16px" };
  const headingStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "20px", textAlign: "center" };
  const orderCardStyle = {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };
  const orderHeaderStyle = { fontSize: "0.9rem", color: "#6b7280", marginBottom: "8px" };
  const itemStyle = {
    padding: "8px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#f9fafb",
    fontSize: "0.9rem",
    marginBottom: "4px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Purchases</h2>
      {purchases.map((purchase) => (
        <div key={purchase.id} style={orderCardStyle}>
          <div style={orderHeaderStyle}>
            Order ID: {purchase.id} — {new Date(purchase.created_at).toLocaleDateString()}
          </div>
          {purchase.items.map((item) => (
            <div key={item.id} style={itemStyle}>
              {item.product.title} — ${item.product.price}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
