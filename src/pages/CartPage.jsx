// // // src/pages/CartPage.jsx
// // import React, { useEffect, useState } from "react";
// // import { load, save } from "../utils/storage";
// // import { useNavigate } from "react-router-dom";

// // export default function CartPage() {
// //   const [items, setItems] = useState([]);
// //   const nav = useNavigate();

// //   useEffect(() => {
// //     const cart = load("eco_cart", []) || [];
// //     const products = load("eco_products", []) || [];
// //     const list = cart.map(id => products.find(p => p.id === id)).filter(Boolean);
// //     setItems(list);
// //   }, []);

// //   function remove(id) {
// //     const cart = (load("eco_cart", []) || []).filter(x => x !== id);
// //     save("eco_cart", cart);
// //     setItems(items.filter(i => i.id !== id));
// //   }

// //   function checkout() {
// //     if (items.length === 0) return alert("Cart empty");
// //     const orders = load("eco_orders", []) || [];
// //     const order = { id: "o_" + Math.random().toString(36).slice(2,9), items: items.map(i => i.id), date: Date.now() };
// //     orders.unshift(order);
// //     save("eco_orders", orders);
// //     save("eco_cart", []);
// //     nav("/orders");
// //   }

// //   const total = items.reduce((s, p) => s + Number(p.price || 0), 0);

// //   // Inline styles
// //   const containerStyle = {
// //     maxWidth: "700px",
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

// //   const itemStyle = {
// //     backgroundColor: "#fff",
// //     padding: "16px",
// //     borderRadius: "12px",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   };

// //   const itemInfoStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //   };

// //   const itemTitleStyle = {
// //     fontWeight: "600",
// //     marginBottom: "4px",
// //   };

// //   const itemPriceStyle = {
// //     fontSize: "0.9rem",
// //     color: "#6b7280",
// //   };

// //   const buttonStyle = {
// //     padding: "8px 16px",
// //     borderRadius: "8px",
// //     border: "1px solid #d1d5db",
// //     backgroundColor: "#fff",
// //     cursor: "pointer",
// //     fontWeight: "500",
// //   };

// //   const totalContainerStyle = {
// //     marginTop: "24px",
// //     backgroundColor: "#fff",
// //     padding: "16px",
// //     borderRadius: "12px",
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   };

// //   const checkoutButtonStyle = {
// //     padding: "10px 20px",
// //     borderRadius: "8px",
// //     border: "none",
// //     backgroundColor: "#16a34a",
// //     color: "#fff",
// //     cursor: "pointer",
// //     fontWeight: "600",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <h2 style={headingStyle}>Cart</h2>
// //       <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
// //         {items.length === 0 && <div style={emptyStyle}>Your cart is empty</div>}
// //         {items.map(i => (
// //           <div key={i.id} style={itemStyle}>
// //             <div style={itemInfoStyle}>
// //               <div style={itemTitleStyle}>{i.title}</div>
// //               <div style={itemPriceStyle}>${i.price}</div>
// //             </div>
// //             <div>
// //               <button style={buttonStyle} onClick={() => remove(i.id)}>Remove</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {items.length > 0 && (
// //         <div style={totalContainerStyle}>
// //           <div style={{ fontWeight: "700" }}>Total: ${total}</div>
// //           <button style={checkoutButtonStyle} onClick={checkout}>Checkout</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // src/pages/CartPage.jsx
// import React, { useEffect, useState } from "react";
// import { fetchCart, removeFromCart, checkoutCart } from "../api.js";
// import { useAuth } from "../contexts/AuthContext";

// export default function CartPage() {
//   const { user, token } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch cart items from backend
//   useEffect(() => {
//     if (!user) return;
//     fetchCart(token)
//       .then((res) => {
//         setCartItems(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [user, token]);

//   const handleRemove = (itemId) => {
//     removeFromCart(itemId, token)
//       .then(() => {
//         setCartItems(cartItems.filter((item) => item.id !== itemId));
//         alert("Removed from cart");
//       })
//       .catch((err) => console.error(err));
//   };

//   const handleCheckout = () => {
//     checkoutCart(token)
//       .then(() => {
//         setCartItems([]);
//         alert("Checkout successful!");
//       })
//       .catch((err) => console.error(err));
//   };

//   if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading cart...</p>;
//   if (cartItems.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</p>;

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price, 0);

//   // Inline styles
//   const containerStyle = { maxWidth: "800px", margin: "40px auto", padding: "16px" };
//   const headingStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "20px", textAlign: "center" };
//   const itemStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "16px",
//     borderRadius: "12px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//   };
//   const buttonStyle = { padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600" };
//   const removeButtonStyle = { ...buttonStyle, backgroundColor: "#ef4444", color: "#fff" };
//   const checkoutButtonStyle = { ...buttonStyle, backgroundColor: "#16a34a", color: "#fff" };
//   const totalStyle = { textAlign: "right", fontWeight: "700", fontSize: "1.2rem", marginTop: "20px" };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>My Cart</h2>
//       <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//         {cartItems.map((item) => (
//           <div key={item.id} style={itemStyle}>
//             <div>
//               <h3 style={{ fontWeight: "600", marginBottom: "4px" }}>{item.product.title}</h3>
//               <p style={{ color: "#6b7280" }}>${item.product.price}</p>
//             </div>
//             <button style={removeButtonStyle} onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <div style={totalStyle}>
//         Total: ${totalPrice}{" "}
//         <button style={checkoutButtonStyle} onClick={handleCheckout}>Checkout</button>
//       </div>
//     </div>
//   );
// }




// src/pages/CartPage.jsx
import React, { useEffect, useState } from "react";
import { fetchCart, removeFromCart, checkoutCart } from "../api.js";
import { useAuth } from "../contexts/AuthContext";

export default function CartPage() {
  const { user, token } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from backend
  useEffect(() => {
    if (!user) return;
    fetchCart(token)
      .then((res) => {
        setCartItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user, token]);

  const handleRemove = (itemId) => {
    removeFromCart(itemId, token)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
        alert("Removed from cart");
      })
      .catch((err) => console.error(err));
  };

  const handleCheckout = () => {
    checkoutCart(token)
      .then(() => {
        setCartItems([]);
        alert("Checkout successful!");
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading cart...</p>;
  if (cartItems.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</p>;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price, 0);

  // Inline styles
  const containerStyle = { maxWidth: "800px", margin: "40px auto", padding: "16px" };
  const headingStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "20px", textAlign: "center" };
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };
  const buttonStyle = { padding: "8px 16px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "600" };
  const removeButtonStyle = { ...buttonStyle, backgroundColor: "#ef4444", color: "#fff" };
  const checkoutButtonStyle = { ...buttonStyle, backgroundColor: "#16a34a", color: "#fff" };
  const totalStyle = { textAlign: "right", fontWeight: "700", fontSize: "1.2rem", marginTop: "20px" };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Cart</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {cartItems.map((item) => (
          <div key={item.id} style={itemStyle}>
            <div>
              <h3 style={{ fontWeight: "600", marginBottom: "4px" }}>{item.product.title}</h3>
              <p style={{ color: "#6b7280" }}>${item.product.price}</p>
            </div>
            <button style={removeButtonStyle} onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div style={totalStyle}>
        Total: ${totalPrice}{" "}
        <button style={checkoutButtonStyle} onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}
