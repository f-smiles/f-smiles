import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

const StripeCheckoutForm = ({ total }) => {
  const [loading, setLoading] = useState(false);

  // Function to handle the payment token generated by Stripe
  const handleToken = async (token) => {
    setLoading(true);
    try {
      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: total * 100,
        automatic_payment_methods: { enabled: true },
      });

      // Send the payment token and payment intent details to the backend
      const response = await axios.post("/api/payment", {
        token,
        paymentIntent: paymentIntent.client_secret,
      });

      // Check the response status code
      if (response.status === 200) {
        console.log("Payment successful!");
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



