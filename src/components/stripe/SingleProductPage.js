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
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      setTotal(JSON.parse(storedTotal));
    }
  }, []);

  if (!productData) {
    return <div>Product not found</div>;
  }

  const addToCart = (productId) => {
    console.log("Adding product to cart:", productId);
    const productData = getProductData(productId);
    if (productData !== undefined) {
      setCart([...cart, productData]);
      setTotal(total + productData.price);
      localStorage.setItem("cart", JSON.stringify([...cart, productData]));
      localStorage.setItem("total", total + productData.price);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div
          className="w-1/3 h-64 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${productData.image})`,
          }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {productData.name}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            {productData.description}
          </p>
          <div className="flex items-center mt-2">
            {/* Rating Stars */}
          </div>
          <div className="flex items-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              {productData.price} USD
            </h1>
            <button
              onClick={() => addToCart(productData.id)}
              className="px-4 py-2 bg-cyan-500 text-white text-sm font-bold uppercase rounded"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;


// <div className="container mx-auto">
//   <div className="flex flex-wrap items-center">
//     <div className="w-full md:w-1/2">
//       <img style={{ maxWidth: "400px" }} className="h-auto" src={productData.image} alt={productData.name} />
//     </div>
//     <div className="mt-20 w-full md:w-1/2 pl-4">
//       <h1 className="text-lg">{productData.name}</h1>
//       <h2 className="text-tan">{productData.price} USD</h2>
//       <p className="desc text-rose mt-2">{productData.description}</p>
//       <div className="buttons mt-4">
//         <button onClick={() => addToCart(productData.id)} className="rounded-full px-4 py-2 bg-rose-200 text-white rounded hover:bg-blue-700">Add to bag</button>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };
