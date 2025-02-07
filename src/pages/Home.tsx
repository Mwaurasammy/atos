import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import ProductCard from "../components/ProductCard";
import { Product } from "../store/useProductStore"; 
import "../styles/home.css";

const Home = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="home-container">
      <h1 className="home-title">Products</h1>
      <div className="product-grid">
        {products.map((product: Product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
