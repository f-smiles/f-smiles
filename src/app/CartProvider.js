import React, { useState, useEffect, useCallback } from "react";
import CartContext from "./CartContext";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [total, setTotal] = useLocalStorage("total", 0);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = useCallback(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    setCartCount(count);
  }, [cart]);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    const updatedTotal = total - product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);
    updateCartCount();
  };

  useEffect(() => {
    updateCartCount();
  }, [updateCartCount]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart, // Added setCart function
        total,
        cartCount,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
