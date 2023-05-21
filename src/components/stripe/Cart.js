import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import StripeCheckoutForm from "./StripeCheckoutForm";

const Cart = ({ products, removeFromCart, updateCart }) => {
  const [editedCounts, setEditedCounts] = useState({});
  const handleIncrement = (product) => {
    const updatedQuantity = product.count + 1;
    updateCart(product.id, updatedQuantity);
  };

  const handleDecrement = (product) => {
    if (product.count > 1) {
      const updatedQuantity = product.count - 1;
      updateCart(product.id, updatedQuantity);
    } else {
      removeFromCart(product.id);
    }
  };

  const total = products.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );

  const handleToken = (token) => {
    console.log(token);
    // Send token to backend to process payment
  };

  const handleCountChange = (event, product) => {
    const value = event.target.value;
    setEditedCounts((prevEditedCounts) => ({
      ...prevEditedCounts,
      [product.id]: value,
    }));
    const newCount = parseInt(value);
    if (!isNaN(newCount)) {
      updateCart(product.id, newCount);
    }
  };

  return (
    <div className="flex flex-col items-center">
    <h2 className="mb-10 text-2xl">Your Bag</h2>
    <div className="w-full max-w-2xl">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center mb-4 py-2 px-4 border-b border-gray-300"
        >
          <div className="mr-4">
            <img
              src={product.image}
              alt="Product"
              style={{
                maxWidth: "100%",
                width: "100px",
                maxHeight: "100px",
                marginRight: "120px",
              }}
            />
          </div>
          <div>
            <h3>
              <Link to={`/products/${product.id}`}>
                {product.name.toUpperCase()}
              </Link>
            </h3>
            <div className="flex items-center">
              <div className="flex items-center rounded-full border border-violet-700" style={{ padding: "5px" }}>
                <button
                  className="text-violet-700 px-4 focus:outline-none"
                  onClick={() => handleDecrement(product)}
                >
                  -
                </button>
                <input
  type="text"
  className="text-violet-700 w-10 text-center border-none outline-none"
  value={
    editedCounts[product.id] !== undefined
      ? editedCounts[product.id]
      : product.count
  }
  onChange={(event) => handleCountChange(event, product)}
  onKeyDown={(event) => {

    const currentValue = event.target.value;
    const isValidKey = /[0-9]/.test(event.key);
    const isMaxLengthReached = currentValue.length >= 2;
  
    if (!isValidKey || isMaxLengthReached) {
      event.preventDefault();
    }
  }}
  onBlur={(event) => {
    const currentValue = event.target.value;
    const numericValue = parseInt(currentValue, 10);
    const maxDoubleDigit = 99;
  
    if (isNaN(numericValue) || numericValue > maxDoubleDigit) {
      const validValue = Math.min(maxDoubleDigit, product.count);
      event.target.value = validValue;
      handleCountChange(event, product);
    }
  }}
  
/>

                <button
                  className="text-violet-700 px-4 focus:outline-none"
                  onClick={() => handleIncrement(product)}
                >
                  +
                </button>
              </div>
            </div>
            <p>${(product.price * product.count).toFixed(2)}</p>
          </div>
          <button onClick={() => removeFromCart(product.id)} className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
    <h3>Total: ${total.toFixed(2)}</h3>
    <StripeCheckoutForm
      stripeKey="pk_live_51N0UqcF1lRcn4KYhmkaGhYXNrMU9sMmAQnW4VKgjyacvg3j69Qfer276V8s9IyrFYJQzeoWPNi5CFlKXe5NHevKc00mEMElvoB"
      token={handleToken}
      amount={total * 100}
      name="My Store"
      description="Checkout"
      total={total}
    />
  </div>
  
  );
};

export default Cart;
