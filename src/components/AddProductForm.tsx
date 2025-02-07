import React, { useState } from "react";
import { useProductStore } from "../store/useProductStore";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addProduct = useProductStore((state) => state.addProduct);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !image) return;
    addProduct({ id: Date.now(), title, price: Number(price), image });
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
