import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsArray, getProductData } from "./products";
import Cart from "./Cart";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      const savedTotal = savedCart.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      setTotal(savedTotal);
    }
  }, []);

  const addToCart = (productId) => {
    const productData = getProductData(productId);
    if (productData !== undefined) {
      const existingProductIndex = cart.findIndex(
        (product) => product.id === productId
      );
  
      if (existingProductIndex !== -1) {
      
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].count += 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
       
        const updatedCart = [...cart, { ...productData, count: 1 }];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
  
      setTotal((prevTotal) => prevTotal + productData.price);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTotal(total - removedProduct.price);
    }
  };

  return (
    <div>
      <section className="flex flex-wrap gap-4 justify-center py-20 text-center">
        <h1>products</h1>
        {ProductsArray.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <Card
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  addToCart={() => addToCart(product.id)}
                />
              </div>
              <div></div>
            </div>
          );
        })}
       
        {/* <Cart products={cart} removeFromCart={removeFromCart} /> */}
      </section>
    </div>
  );
};

const Card = ({id, image, name, description, price, addToCart }) => {
  const [hover, setHover] = useState(false)
  
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-easing="linear"
      className="bg-8F8EA0 bg-opacity-25 max-w-xs px-12 pb-12 pt-20 flex flex-col"
      // bg-F1F1F0 
    >
      <Link to={`/products/${id}`}>
        <div className="grid grid-rows-2 gap-4">
          <img
            className="h-32 mx-auto my-auto self-center"
            src={image}
            alt={name}
          />
          <div>
            <h3 className="uppercase mb-4">{name}</h3>
            <h3 className="uppercase mb-4">{price}.00 USD</h3>
            {/* <p>{description}</p> */}
          </div>
        </div>
      </Link>
      <button className="hover:text-gray-200 hover:bg-stone-900 border border-gray-900 text-gray-900 py-2 px-4 rounded-full" onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductsPage;