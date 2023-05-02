import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import stripe from "stripe";

const stripeInstance = stripe(process.env.REACT_APP_STRIPE_KEY);

const StripeCheckoutForm = ({ total }) => {
  const [loading, setLoading] = useState(false);

  const createCustomer = async (token) => {
    try {
      const customer = await stripeInstance.customers.create({
        email: token.email,
        source: token.id
      });
      console.log("Customer created: ", customer);
      return customer.id;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleToken = async (token) => {
    setLoading(true);
    try {
      const customerId = await createCustomer(token);
      const paymentIntent = await stripeInstance.paymentIntents.create({
        currency: "USD",
        amount: total * 100,
        customer: customerId,
        setup_future_usage: "off_session",
      });
      const response = await axios.post("/api/payments", {
        token,
        paymentIntent: paymentIntent.client_secret,
      });
      if (response.status === 200) {
        console.log("Payment successful!");
        setLoading(false);
      } else if (response.status === 404) {
        console.log("Payment failed: 404 Not Found");
        setLoading(false);
      } else {
        console.log("Payment failed!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Total: ${total}</h2>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_live_51N0UqcF1lRcn4KYhmkaGhYXNrMU9sMmAQnW4VKgjyacvg3j69Qfer276V8s9IyrFYJQzeoWPNi5CFlKXe5NHevKc00mEMElvoB"
        amount={total * 100}
        currency="USD"
        name="My E-commerce Store"
        description="Payment for My E-commerce Store"
        image="https://www.example.com/logo.png"
      />
    
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default StripeCheckoutForm;





