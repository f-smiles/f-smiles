import React, { useState } from "react";
import { ProductsArray, getProductData } from "./products";
import Cart from "./Cart";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (productId) => {
    const productData = getProductData(productId);
    if (productData !== undefined) {
      setCart([...cart, productData]);
      setTotal(total + productData.price);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      setCart(updatedCart);
      setTotal(total - removedProduct.price);
    }
  };

  return (
    <div>
      <h1>products</h1>
      {ProductsArray.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <Cart products={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductsPage;



