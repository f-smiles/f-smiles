import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Cart from "./Cart";
import { getProductData } from "./products";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  const [cartItemCount, setCartItemCount] = useState(0);
  const productData = getProductData(id);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      const savedTotal = savedCart.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      setTotal(savedTotal);
      setCartItemCount(savedCart.length);
    }
  }, []);

  const addToCart = (productId) => {
    const productData = getProductData(id);
    if (productData !== undefined) {
      const updatedCart = [...cart, productData];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTotal(total + productData.price);
      setCartItemCount(cartItemCount + 1); 
    }
  };
const removeFromCart = (productId) => {
  const removedProduct = cart.find((product) => product.id === productId);
  if (removedProduct !== undefined) {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setTotal(total - removedProduct.price);
    setCartItemCount(cartItemCount - 1);
  }
};

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setCartItemCount(0);
    localStorage.removeItem("cart");
  };

  return (
    <div className="mt-20">
      <h1>Checkout</h1>
      <Cart products={cart} removeFromCart={removeFromCart} />
      <button onClick={clearCart}>Clear Cart</button>
      <li className="z-10">
        <NavLink to="/checkout" className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal">
        </NavLink>
      </li>
    </div>
  );
};

export default Checkout;
