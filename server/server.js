const express = require("express");
const app = express();
const { resolve } = require("path");
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.post("/confirm-payment-intent", async (req, res) => {
  try {
    const { clientSecret } = req.body;

    const paymentIntent = await stripe.paymentIntents.confirm(clientSecret);

    // Charge the customer
    await stripe.charges.create({
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      source: paymentIntent.payment_method,
    });

    // Send a success response to the client
    res.send({ success: true });
  } catch (e) {
    // Handle any errors and send an error response to the client
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(3001, () =>
  console.log(`Node server listening at http://localhost:3001`)
);
