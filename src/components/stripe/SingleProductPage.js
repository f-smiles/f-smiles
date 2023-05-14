import React from "react";
import { getProductData } from "./products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProductPage = () => {
  const { id } = useParams();
  const productData = getProductData(id);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
      const existingProductIndex = cart.findIndex(
        (product) => product.id === productId
      );
  
      const quantityToAdd = quantity; 
  
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].count += quantityToAdd;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const updatedProductData = {
          ...productData,
          count: quantityToAdd, 
        };
        const updatedCart = [...cart, updatedProductData];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
  
      setTotal((prevTotal) => prevTotal + productData.price * quantityToAdd); 
      localStorage.setItem("total", total + productData.price * quantityToAdd);
    }
  };
  

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-violet-100 to-violet-50">
      <div className="max-w-4xl bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-lg overflow-hidden flex"style={{ height: "400px" }}>
        <div
          className="w-1/3 h-64 bg-cover bg-center bg-no-repeat flex-shrink-0"
          style={{
            backgroundImage: `url(${productData.image})`,
          }}
        ></div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(../../images/product.png)`, 
              opacity: 0.9,
              backgroundSize: "50%", 
              backgroundPosition: "left",
              zIndex:-1,
            }}
          ></div>
        <div className="w-2/3 p-4 flex flex-col justify-center">
          <h1 className="text-gray-900 font-bold text-2xl mb-2">
            {productData.name}
          </h1>
          <p className="text-gray-600 text-sm mb-10">
            {productData.description}
          </p>
          <div className="flex items-center mb-2">
         
          </div>
          
          <div className="flex items-center justify-between">
            <h1 className="text-gray-700 font-bold text-xl">
              {productData.price} USD
            </h1>
            
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                style={{ zIndex: 10 }}
              >
                -
              </button>
              <span className="px-4 text-gray-700">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                style={{ zIndex: 10 }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(productData.id)}
              className="hover:bg-gray-600 px-4 py-2 bg-cyan-500 text-white text-sm font-bold uppercase rounded z-10"
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
