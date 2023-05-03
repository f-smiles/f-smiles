const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const { resolve } = require("path");
require("dotenv").config();

app.use(bodyParser.json());
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

const path = require('path');
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  const path = resolve(publicDirectoryPath + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/api/payments', async (req, res) => {
  try {
    const { token, paymentIntent } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
    const intent = await stripe.paymentIntents.confirm(paymentIntent, {
      customer: customer.id,
      payment_method: token.card.id
    });
    if (intent.status === "succeeded") {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount,
      automatic_payment_methods: { enabled: true },
    });

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

    res.send({ success: true });
  } catch (e) {
 
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(3000, () =>
  console.log(`Node server listening at http://localhost:3000/api/payments`)
);