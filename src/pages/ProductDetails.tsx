// ProductDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { Product } from "../store/useProductStore";  // Import the Product type

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from URL
  const product = useProductStore((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.title} className="w-1/2 mx-auto" />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl mt-2 text-gray-700">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
