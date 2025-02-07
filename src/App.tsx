import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";  // Ensure this file exists
import AdminDashboard from "./pages/AdminDashboard";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />  {/* ✅ Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
