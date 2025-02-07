// Home.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import { Product } from "../store/useProductStore";  // Import the Product type

const Home = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);  // Fix: Add fetchProducts to the dependency array

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product: Product) => (  // Add type to product
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
