import React, { useState, useEffect, useMemo, useCallback } from "react";
import CartContext from "./CartContext";

// Step 2: Create a cart provider component
const CartProvider = ({ children }) => {
  const [show, setShow] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [about, setAbout] = useState(false);
  const [patient, setPatient] = useState(false);
  const [treatments, setTreatments] = useState(false);
  const [total, setTotal] = useState(0);

  const calculatedCartCount = useMemo(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    return count;
  }, [cart]);
  
  const updateCartCount = useCallback(() => {
    setCartCount(calculatedCartCount);
  }, [calculatedCartCount]);
  

  
    useEffect(() => {
    updateCartCount();
  }, [cart, total]);
  
 
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedTotal = JSON.parse(localStorage.getItem("total"));
  
    if (storedCart && storedTotal) {
      setCart(storedCart);
      setTotal(storedTotal);
      const savedCartItems = storedCart.reduce((count, product) => count + product.count, 0);
      setCartCount(savedCartItems);
    }
  }, [cart, total]);
  
 
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    const updatedTotal = total - product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);

  updateCartCount(updatedCart.length);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(updatedTotal));
  };


  return (
  <CartContext.Provider
      value={{
        cart,
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