import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Bag from "./Bag";
import { getProductData } from "./products";
import StripeCheckoutForm from "./StripeCheckoutForm";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [productData, setProductData] = useState(null);

  const handleToken = (token) => {
    console.log(token);
    // Send token to backend to process payment
  };

  const updateCart = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, count: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      setCartItemCount(savedCart.length);
    }

    const fetchData = async () => {
      const data = await getProductData(id);
      setProductData(data);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const updatedTotal = cart.reduce(
      (accumulator, current) => accumulator + current.price * current.count,
      0
    );
    setTotal(updatedTotal);
  }, [cart]);



  const removeFromCart = (productId) => {
    const removedProduct = cart.find((product) => product.id === productId);
    if (removedProduct !== undefined) {
      const updatedCart = cart.filter((product) => product.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItemCount(cartItemCount - 1);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCartItemCount(0);
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <>
      <div className="mt-20">
        <h1 className="text-xl">Checkout</h1>
        <div className="flex flex-col lg:flex-row">
  <div className="lg:w-1/2">
    <label className="text-indigo-700 bg-white px-2 py-1 text-xs mb-2">
      Contact Information
    </label>
    <input
      className="w-full block p-2 rounded-md border-gray-300"
      type="text"
      required
      style={{ borderRadius: "9999px", border: "1px solid gray" }}
    />
       <StripeCheckoutForm
        stripeKey="pk_live_51N0UqcF1lRcn4KYhmkaGhYXNrMU9sMmAQnW4VKgjyacvg3j69Qfer276V8s9IyrFYJQzeoWPNi5CFlKXe5NHevKc00mEMElvoB"
        token={handleToken}
        amount={total * 100}
        name="My Store"
        description="Checkout"
        total={total}
      />
        <button onClick={clearCart}>Clear Cart</button>
  </div>
  <div className="lg:w-1/2">
    <Bag
      products={cart}
      removeFromCart={removeFromCart}
      updateCart={updateCart}
      productData={productData}
    />
 
  </div>
  
</div>


      
      </div>
    </>
  );
};

export default Checkout;
