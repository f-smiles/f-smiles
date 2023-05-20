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

      <h2>Your Cart</h2>
      {products.map((product) => (
        <div key={product.id}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
            style={{
              border: '1px solid black',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
              padding: '5px'
            }}
          >
            <button
              className="px-4 mr-1"
              onClick={() => handleIncrement(product)}
            >
              +
            </button>
            <p>{product.count}</p>
            <button
              className="px-4"
              onClick={() => handleDecrement(product)}
            >
              -
            </button>
          </div>
         
          <div style={{ position: 'relative' }}>
  <img
    src={product.image}
    alt="Product"
    style={{ maxWidth: '100%', maxHeight: '100px', marginLeft: '10px' }}
  />
  <button
    onClick={() => removeFromCart(product.id)}
    style={{
      position: 'absolute',
      top: '0',
      right: '0',
    }}
  >
    x
  </button>
</div>
            <h3 className="underline">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              
            </h3>
           
        
           
          </div>
          
          <p>Price: ${product.price.toFixed(2)}</p>
         
         
         
         
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

    </div>
  );

};

export default Cart;
