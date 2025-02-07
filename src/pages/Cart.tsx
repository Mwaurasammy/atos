import React from "react";
import { useProductStore } from "../store/useProductStore";

const Cart = () => {
  const { cart, removeFromCart } = useProductStore();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty</p> : null}
      {cart.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} width="50" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
