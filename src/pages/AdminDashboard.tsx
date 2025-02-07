import React from "react";
import { useProductStore } from "../store/useProductStore";
import AddProductForm from "../components/AddProductForm";
import "../styles/adminDashboard.css";

const AdminDashboard = () => {
  const { products, deleteProduct, updateProduct } = useProductStore();

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="add-product-section">
        <AddProductForm />
      </div>
      <h2>Manage Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <input
              type="text"
              value={product.title}
              onChange={(e) =>
                updateProduct({ ...product, title: e.target.value })
              }
            />
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                updateProduct({ ...product, price: Number(e.target.value) })
              }
            />
            <button onClick={() => deleteProduct(product.id)}>❌ Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
