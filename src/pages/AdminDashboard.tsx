import React from "react";
import { useProductStore } from "../store/useProductStore";
import AddProductForm from "../components/AddProductForm";

const AdminDashboard = () => {
  const { products, deleteProduct, updateProduct } = useProductStore();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddProductForm />
      <h2>Manage Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width="50" />
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
  );
};

export default AdminDashboard;
