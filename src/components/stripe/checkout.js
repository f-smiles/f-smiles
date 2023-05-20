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

  const updateCart = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, count: newQuantity };
      }
      return product;
    });
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      setCartItemCount(savedCart.length);
    }
  }, []);

  useEffect(() => {
    const updatedTotal = cart.reduce(
      (accumulator, current) => accumulator + current.price * current.count,
      0
    );
    setTotal(updatedTotal);
  }, [cart]);

  const addToCart = (productId) => {
    const productData = getProductData(productId);
    console.log(productData)
    if (productData !== undefined) {
      const existingProduct = cart.find((product) => product.id === productId);
      if (existingProduct) {
        const updatedCart = cart.map((product) =>
          product.id === productId
            ? { ...product, count: product.count + 1 }
            : product
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const updatedCart = [...cart, { ...productData, count: 1 }];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartItemCount(cartItemCount + 1);
      }
    }
  };

  const removeFromCart = (productId) => {
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItemCount(cartItemCount - 1);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCartItemCount(0);
    localStorage.removeItem("cart");
  };
console.log(id)
  return (
    <div className="mt-20">
      <h1 className="text-xl">Checkout</h1>
      <Cart
        products={cart}
        removeFromCart={removeFromCart}
        updateCart={updateCart} 
      />
      <button onClick={clearCart}>Clear Cart</button>
      <li className="z-10">
        <NavLink
          to="/checkout"
          className="cursor-pointer block text-sm leading-3 tracking-normal px-3 font-normal"
        ></NavLink>
      </li>
      <div>
         {/* <img src={productData.image} alt={productData.name} /> */}
        {/* <h2>Total: ${total.toFixed(2)}</h2> */}
      </div>
    </div>
  );
};

export default Checkout;
