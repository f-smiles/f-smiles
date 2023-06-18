import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductsArray, getProductData } from "./products";
import Cart from "./Bag";
import Navbar from "../navbar/Navbar";
import CartContext from "../../app/CartContext";

const getCartCount = (cartItems) => {
  return cartItems.reduce((count, product) => count + product.count, 0);
};

const ProductsPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
      fetchPrices();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_HOST}/api/products`);
      if (data) { setProducts(data) }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }
  const fetchPrices = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_HOST}/api/prices`);
      if (data) { setPrices(data) }
      setIsLoading(false);
      // console.log("prices", data);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  const getProductPrice = (productId) => {
    const price = prices.find((price) => price.product === productId);
    return price ? (price.unit_amount / 100) : '';
  }


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      const savedTotal = savedCart.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      setTotal(savedTotal);
      setCartCount(getCartCount(savedCart));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(getCartCount(cart));
  }, [cart]);

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
        const updatedProductData = {
          ...productData,
          count: 1,
        };
        const updatedCart = [...cart, updatedProductData];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      setTotal((prevTotal) => prevTotal + productData.price);
      setCartCount(getCartCount(cart));
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTotal(total - removedProduct.price);
      setCartCount(getCartCount(updatedCart));
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-24">
      {/* <Navbar cartCount={cartCount} /> */}
      <div className="h-[20vh] flex justify-center items-center">
        <h1 className="text-5xl">Products</h1>
      </div>
      {isLoading ? (
        <p className="mt-16 mb-32 text-3xl text-center flex flex-col justify-center items-center gap-4">
          <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>          
          <span>Loading...</span>
        </p>
        ) : (
        <section id="products" className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-4 sm:gap-8 md:gap-16 ">
          {products && products.map((product) => (
            <div className="space-y-8" key={product.id}>
              {/* {console.log(product.id)} */}
              <Link to={`/products/${product.id}`} className="space-y-8">
                <img className="w-full aspect-video object-contain mix-blend-color-burn" src={product.images[0]} alt={product.name} />
                <h2>{product.name}</h2>
              </Link>
              <button className="mx-auto hover:text-gray-200 hover:bg-stone-900 border border-gray-900 text-gray-900 py-2 px-4 rounded-full" type="button" aria-label={`Add to Bag ${product.name}`} onClick={() => addToCart(product.id)}>
                <span>Add to Bag</span>
                <span>{getProductPrice(product.id)} $</span>
              </button>
            </div>
          ))}
        </section>
      )
      }
     

      {/* <section className="py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
    {ProductsArray.map((product) => (
      <div key={product.id}>
        <Card
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          addToCart={() => addToCart(product.id)}
        />
      </div>
    ))}
  </div>
</section> */}

    </div>
  );
};

const Card = ({ id, image, name, description, price, addToCart }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="rounded-3xl max-w-xs px-12 pb-12 pt-20 flex flex-col text-center">
      <Link to={`/products/${id}`}>
        <div className="grid grid-rows-2 gap-4">
          <img className="h-32 mx-auto my-auto self-center" src={image} alt={name} />
          <div>
            <h3 className="mb-4">{name}</h3>
            {/* <p>{description}</p> */}
          </div>
        </div>
      </Link>
      <button className="flex items-center hover:text-gray-200 hover:bg-stone-900 border border-gray-900 text-gray-900 py-2 px-4 rounded-full" onClick={() => addToCart(id)}>
        <span className="ml-4 mr-6">Add To Bag</span>
        <span className="mr-1 w-px bg-indigo-900 h-6"></span>
        <span className="ml-4">
          <h3 className="uppercase">{price} $</h3>
        </span>
      </button>
    </div>
  );
};

export default ProductsPage;
