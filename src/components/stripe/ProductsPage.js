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
      <section className="flex flex-wrap gap-4 justify-center py-20 text-center">
        <h1>products</h1>
        {ProductsArray.map((product) => {
          return (
            <Card
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              buttonText="Add To Cart"
              addToCart={() => addToCart(product.id)}
            />
          );
        })}
        <h2>Total: ${total.toFixed(2)}</h2>
        <Cart products={cart} removeFromCart={removeFromCart} />
      </section>
    </div>
  );
};

const Card = ({ image, name, description, buttonText, price, addToCart }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-easing="linear"
      className="bg-F1F1F0 max-w-xs px-12 pb-12 pt-20 flex flex-col"
    >
      <div className="grid grid-rows-2 gap-4">
        <img
          className="h-32 mx-auto my-auto self-center"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="uppercase mb-4">{name}</h3>
          <h3 className="uppercase mb-4">{price}</h3>
          <p>{description}</p>
          {buttonText && (
            <button
              className="rounded-full text-sm px-8 py-2 border border-black"
              onClick={() => addToCart()}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;



