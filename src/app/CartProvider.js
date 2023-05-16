import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = useCallback(() => {
    const count = cart.reduce((totalCount, item) => totalCount + item.count, 0);
    setCartCount(count);
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedTotal = JSON.parse(localStorage.getItem("total"));
    

    if (storedCart && storedTotal) {
      setCart(storedCart);
      setTotal(storedTotal);
    }
  }, [cart]);

  useEffect(() => {
    const count = cart.reduce((totalCount, item) => totalCount + item.count, 0);
    setCartCount(count);
  }, [cart, updateCartCount]);
  

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedTotal = total + product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(updatedTotal));
    updateCartCount();
    
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    const updatedTotal = total - product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(updatedTotal));

  };


  const value = {
    cart,
    total,
    cartCount,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;