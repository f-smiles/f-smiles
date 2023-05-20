import React from "react";
import { Link, NavLink } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import StripeCheckoutForm from "./StripeCheckoutForm";

const Cart = ({ products, removeFromCart, updateCart }) => {
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

  const total = products.reduce((acc, curr) => acc + curr.price * curr.count, 0);

  const handleToken = (token) => {
    console.log(token);
    // Send token to backend to process payment
  };
  
  return (
    <div>

      <h2>Cart</h2>
      {products.map((product) => (
        <div key={product.id}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Product name */}
            <h3 className="underline">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h3>

            {/* Image */}
            <img
              src={product.image}
              alt="Product"
              style={{ maxWidth: '100%', maxHeight: '100px', marginLeft: '10px' }}
            />
          </div>
          
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Count: {product.count}</p>
         
          <button
            className="bg-indigo-300 rounded-full px-3 py-2 mr-3"
            onClick={() => handleIncrement(product)}
          >
            +
          </button>
          <button
            className="bg-gray-300 rounded-full px-3 py-2 mr-3"
            onClick={() => handleDecrement(product)}
          >
            -
          </button>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <StripeCheckoutForm
        stripeKey="pk_live_51N0UqcF1lRcn4KYhmkaGhYXNrMU9sMmAQnW4VKgjyacvg3j69Qfer276V8s9IyrFYJQzeoWPNi5CFlKXe5NHevKc00mEMElvoB"
        token={handleToken}
        amount={total * 100}
        name="My Store"
        description="Checkout"
        total={total}
      />

      <button type="button">
        <NavLink to="/checkout">Checkout</NavLink>
      </button>
    </div>
  );

};

export default Cart;
