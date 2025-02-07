import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from URL
  const product = useProductStore((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-details-image"
        />
      </div>
      <h1 className="product-details-title">{product.title}</h1>
      <p className="product-details-price">${product.price}</p>
      <p className="product-details-description">{product.description}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
