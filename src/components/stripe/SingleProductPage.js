import React from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const productData = getProductData(id);

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-40">
      <h1>{productData.name}</h1>
      <img src={productData.image} alt={productData.name} />
      <p>{productData.description}</p>
      <p>{productData.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default SingleProductPage;
