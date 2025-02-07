# 🛒 E-Commerce Store

An elegant e-commerce store built with **React (Vite) + TypeScript + Zustand** for state management and **Tailwind CSS** for styling. It includes features like product listing, cart functionality, and an admin dashboard to manage products.

## 🚀 Features

- 📌 **Product Listing** – Display products in a grid layout.
- 🛒 **Shopping Cart** – Add and remove products from the cart.
- 🏪 **Product Details** – View detailed product descriptions.
- 🔑 **Admin Dashboard** – Manage products (add, edit, and delete).
- 🎨 **Responsive UI** – Clean Netflix-style design.

---

## 📂 Project Structure

📦 e-commerce-store ├── 📁 src │ ├── 📁 components # Reusable UI components │ ├── 📁 pages # Main pages (Home, Cart, Product Details, Admin) │ ├── 📁 store # Zustand state management │ ├── 📁 styles # Global and component-specific styles │ ├── App.tsx # Root component │ ├── main.tsx # Main entry file │ ├── routes.tsx # Application routes │ ├── index.css # Global styles ├── 📜 package.json # Dependencies and scripts ├── 📜 README.md # Project documentation

yaml
Copy
Edit

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/e-commerce-store.git
cd e-commerce-store
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
# or
yarn install
3️⃣ Run the Project
sh
Copy
Edit
npm run dev
Open your browser and visit: http://localhost:5173 (default Vite dev server)

🏗️ State Management (Zustand)
The project uses Zustand for global state management. It handles:

Fetching Products
Cart Operations (Add/Remove)
Admin Functions (Edit/Delete Products)
Example store (useProductStore.ts):
ts
Copy
Edit
import create from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductStore {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  fetchProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== productId) })),
  fetchProducts: async () => {
    // Fetch logic
  },
}));
📜 Routes
The app uses React Router for navigation:

Route	Description
/	Home (Product List)
/product/:id	Product Details
/cart	Shopping Cart
/admin	Admin Dashboard
🎨 Styling
Tailwind CSS for responsive design.
Custom CSS for finer adjustments.
Example Product Card Styling (productcard.css):
css
Copy
Edit
.product-card {
  background: #1e1e1e;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}
📌 Future Improvements
🔥 User Authentication
💳 Checkout and Payment Integration
📝 Order History & Wishlist
