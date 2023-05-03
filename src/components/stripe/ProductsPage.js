import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <div key={product.id}>
              <div>
                <Card
                id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  // description={product.description}
                  addToCart={() => addToCart(product.id)}
                />
              </div>
              <div>
              
              </div>
            </div>
          );
        })}
        <h2>Total: ${total.toFixed(2)}</h2>
        <Cart products={cart} removeFromCart={removeFromCart} />
      </section>
    </div>
  );
};

const Card = ({id, image, name, description, price, addToCart }) => {
  const [hover, setHover] = useState(false)
  
  return (
    <Link to={`/products/${id}`}>
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
          {/* <p>{description}</p> */}
          <button className="border border-gray-900 text-gray-900 py-2 px-4 rounded-full" onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductsPage;