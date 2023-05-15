import React, { useState, useEffect} from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedTotal = JSON.parse(localStorage.getItem("total"));
    

    if (storedCart && storedTotal) {
      setCart(storedCart);
      setTotal(storedTotal);
    }
  }, []);



  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    const updatedTotal = total + product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(updatedTotal));
    setCartCount((prevCount) => prevCount + 1);
  };
  
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    const updatedTotal = total - product.price;
    setCart(updatedCart);
    setTotal(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("total", JSON.stringify(updatedTotal));
    setCartCount(cartCount - 1); // Update cartCount directly
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