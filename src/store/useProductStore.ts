// useProductStore.ts
import { create } from "zustand";
import { getProducts } from "../api/productApi";

export interface Product {  // Make sure to export this interface
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string; // Ensure it exists to avoid errors in ProductDetails
}

interface ProductStore {
  products: Product[];
  cart: Product[];
  fetchProducts: () => Promise<void>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  addProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  cart: [],
  fetchProducts: async () => {
    const data = await getProducts();
    set({ products: data });
  },
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updatedProduct.id ? updatedProduct : p
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
}));
