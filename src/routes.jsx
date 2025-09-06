import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import AddProductPage from './pages/AddProductPage';
import MyListingsPage from './pages/MyListingsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import DashboardPage from './pages/DashboardPage';
import CartPage from './pages/CartPage';
import PreviousPurchasesPage from './pages/PreviousPurchasesPage';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/my-listings" element={<MyListingsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchases" element={<PreviousPurchasesPage />} />
      </Routes>
    </Router>
  );
}
