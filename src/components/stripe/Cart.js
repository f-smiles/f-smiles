import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Cart = ({ products, removeFromCart }) => {
  const total = products.reduce((acc, curr) => acc + curr.price, 0);

  const handleToken = (token) => {
    console.log(token);
    // Send token to backend to process payment
  };

  return (
    <div>
      <h2>Cart</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <StripeCheckout
        stripeKey="pk_test_51N0UqcF1lRcn4KYhkhHSjyqn5evskdxdL3SUCblBPMzcr1ph2BXVCXH7mLeA3PL3JUq12RTAjKXLyymDGot9aj4x00JzbIrte1
        "
        token={handleToken}
        amount={total * 100}
        name="My Store"
        description="Checkout"
      >
        <button>Checkout</button>
      </StripeCheckout>
    </div>
  );
};

export default Cart;

