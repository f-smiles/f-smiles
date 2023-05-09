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
    const { token, paymentIntent, customer } = req.body;
    const intent = await stripe.paymentIntents.retrieve(paymentIntent);
    const paymentMethod = await stripe.paymentMethods.attach(token.card.id, { customer: customer });

    const confirmPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent, {
      payment_method: paymentMethod.id
    });

    if (confirmPaymentIntent.status === "succeeded") {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});




app.listen(3000, () =>
  console.log(`Node server listening at http://localhost:3000/api/payments`)
);