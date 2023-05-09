import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTotal(total - removedProduct.price);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Cart products={cart} removeFromCart={removeFromCart} />
      
      <li className="z-10">
        <NavLink to="/checkout" className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal">
        </NavLink>
      </li>
    </div>
  );
};

export default Checkout;
