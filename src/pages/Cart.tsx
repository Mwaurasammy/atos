import React from "react";
import { useProductStore } from "../store/useProductStore";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useProductStore();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
      <h2 className="cart-total">Total: ${total.toFixed(2)}</h2>
      {cart.length > 0 && <button className="cart-checkout">Proceed to Checkout</button>}
    </div>
  );
};

export default Cart;
