import React from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const productData = getProductData(id);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  if (!productData) {
    return <div>Product not found</div>;
  }

  const addToCart = (productId) => {
    const productData = getProductData(productId);
    if (productData !== undefined) {
      setCart([...cart, productData]);
      setTotal(total + productData.price);
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
