
//  // src/pages/ProductFeedPage.jsx
// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import { load, save } from "../utils/storage";
// import { useAuth } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// const CATEGORIES = ["All", "Clothing", "Electronics", "Books", "Home", "Toys", "Other"];

// export default function ProductFeedPage() {
//   const [products, setProducts] = useState([]);
//   const [q, setQ] = useState("");
//   const [cat, setCat] = useState("All");
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const p = load("eco_products", null);
//     if (!p) {
//       const seed = [
//         { id: "p1", userId: "u1", title: "Vintage Lamp", description: "Warm lamp", category: "Home", price: 25 },
//         { id: "p2", userId: "u1", title: "Used Math Textbook", description: "Edition 3", category: "Books", price: 10 }
//       ];
//       save("eco_products", seed);
//       setProducts(seed);
//     } else setProducts(p);
//   }, []);

//   const filtered = products.filter((p) => 
//     p.title.toLowerCase().includes(q.toLowerCase()) && (cat === "All" || p.category === cat)
//   );

//   function addToCart(product) {
//     if (!user) return navigate("/login");
//     const cart = load("eco_cart", []) || [];
//     if (!cart.includes(product.id)) {
//       cart.push(product.id);
//       save("eco_cart", cart);
//       alert("Added to cart");
//     } else alert("Already in cart");
//   }

//   // Inline styles
//   const containerStyle = {
//     maxWidth: "1000px",
//     margin: "40px auto",
//     padding: "16px",
//     boxSizing: "border-box",
//   };

//   const searchContainerStyle = {
//     display: "flex",
//     gap: "12px",
//     marginBottom: "16px",
//     flexWrap: "wrap",
//   };

//   const inputStyle = {
//     flex: 1,
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #d1d5db",
//     fontSize: "1rem",
//     boxSizing: "border-box",
//   };

//   const selectStyle = {
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #d1d5db",
//     fontSize: "1rem",
//   };

//   const addButtonStyle = {
//     padding: "10px 16px",
//     borderRadius: "8px",
//     backgroundColor: "#16a34a",
//     color: "#fff",
//     border: "none",
//     fontWeight: "500",
//     cursor: "pointer",
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//     gap: "16px",
//   };

//   const emptyStyle = {
//     gridColumn: "1 / -1",
//     textAlign: "center",
//     padding: "24px",
//     backgroundColor: "#fff",
//     borderRadius: "12px",
//     border: "1px solid #d1d5db",
//     color: "#6b7280",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Search and filter */}
//       <div style={searchContainerStyle}>
//         <input
//           value={q}
//           onChange={(e) => setQ(e.target.value)}
//           placeholder="Search by title"
//           style={inputStyle}
//         />
//         <select value={cat} onChange={(e) => setCat(e.target.value)} style={selectStyle}>
//           {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
//         </select>
//         <button style={addButtonStyle} onClick={() => navigate("/add")}>+ Add</button>
//       </div>

//       {/* Product grid */}
//       <div style={gridStyle}>
//         {filtered.length === 0 ? (
//           <div style={emptyStyle}>No products found</div>
//         ) : (
//           filtered.map((p) => (
//             <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// src/pages/ProductFeedPage.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts, addToCart as apiAddToCart } from "../api.js";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CATEGORIES = ["All", "Clothing", "Electronics", "Books", "Home", "Toys", "Other"];

export default function ProductFeedPage() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filtered products based on search query and category
  const filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) &&
      (cat === "All" || p.category === cat)
  );

  // Add product to cart
  const handleAddToCart = (product) => {
    if (!user) return navigate("/login");

    apiAddToCart(product.id, token)
      .then(() => alert("Added to cart"))
      .catch((err) => {
        console.error(err);
        alert("Failed to add to cart");
      });
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  // Inline styles
  const containerStyle = { maxWidth: "1000px", margin: "40px auto", padding: "16px", boxSizing: "border-box" };
  const searchContainerStyle = { display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" };
  const inputStyle = { flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem", boxSizing: "border-box" };
  const selectStyle = { padding: "10px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1rem" };
  const addButtonStyle = { padding: "10px 16px", borderRadius: "8px", backgroundColor: "#16a34a", color: "#fff", border: "none", fontWeight: "500", cursor: "pointer" };
  const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" };
  const emptyStyle = { gridColumn: "1 / -1", textAlign: "center", padding: "24px", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #d1d5db", color: "#6b7280" };

  return (
    <div style={containerStyle}>
      {/* Search and filter */}
      <div style={searchContainerStyle}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title"
          style={inputStyle}
        />
        <select value={cat} onChange={(e) => setCat(e.target.value)} style={selectStyle}>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button style={addButtonStyle} onClick={() => navigate("/add")}>+ Add</button>
      </div>

      {/* Product grid */}
      <div style={gridStyle}>
        {filtered.length === 0 ? (
          <div style={emptyStyle}>No products found</div>
        ) : (
          filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))
        )}
      </div>
    </div>
  );
}
