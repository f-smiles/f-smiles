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
      <div key={productData.id} className="grid grid-cols-4 gap-4">
        <h4>{productData.name}</h4>
        <div className="flex flex-col justify-start items-center">
          <img className="bg-FAFAF8 md:max-w-xs max-h-full px-12 pb-12 pt-20" src={productData.image} alt={productData.name} />
       
        </div>
        <div className="flex flex-col justify-start">
        <p className="md:max-w-xs max-h-full px-12 pb-12 pt-20">{productData.description}</p>
          <p>{productData.price} USD</p>
          <button onClick={() => addToCart(productData.id)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
