import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
// import stripe from "stripe";
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

const StripeCheckoutForm = ({ total }) => {
  const [loading, setLoading] = useState(false);

  const createCustomer = async (token) => {
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      await stripe.paymentMethods.attach(token.card.id, {
        customer: customer.id,
      });
      console.log("Customer created: ", customer);
      return customer.id;
    } catch (error) {
      return null;
    }
  };
  const handleToken = async (token) => {
    setLoading(true);
    try {
      const customer = await createCustomer(token);
      const paymentMethod = await stripe.paymentMethods.attach(token.card.id, {
        customer: customer,
      });
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: total * 100,
        customer: customer,
        payment_method_types: ["card"],
        payment_method: paymentMethod.id,
        payment_method_options: {
          card: {
            request_three_d_secure: "automatic",
          },
        },
        setup_future_usage: "off_session",
      });
      const confirmPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id, {
        payment_method: paymentMethod.id,
      });

      if (confirmPaymentIntent.status === "succeeded") {
        const response = await axios.post("/api/payments", {
          token,
          paymentIntent: paymentIntent.id,
          customer: customer,
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
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        // amount={total * 100}
        // currency="USD"
        // name="My E-commerce Store"
        // description="Payment for My E-commerce Store"
        // image="https://www.example.com/logo.png"
      />

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default StripeCheckoutForm;
