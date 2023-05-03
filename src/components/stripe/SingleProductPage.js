import React from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const productData = getProductData(id);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedTotal = localStorage.getItem('total');
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);
  
  if (!productData) {
    return <div>Product not found</div>;
  }

  const addToCart = (productId) => {
    console.log('Adding product to cart:', productId);
    const productData = getProductData(productId);
    if (productData !== undefined) {
      setCart([...cart, productData]);
      setTotal(total + productData.price);
      localStorage.setItem('cart', JSON.stringify([...cart, productData]));
      localStorage.setItem('total', total+productData.price)
    }
  };


  return (
    <div className="mt-40">
      <div key={productData.id} className="grid grid-cols-2 gap-4">
      <h1>{productData.name}</h1>
      <img src={productData.image} alt={productData.name} />
      <p>{productData.description}</p>
      <p>{productData.price}</p>
      <button onClick={() => addToCart(productData.id)}>Add to cart</button>
    </div>
    </div>
  );
};

export default SingleProductPage;
