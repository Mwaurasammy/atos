import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
