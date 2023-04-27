const express = require("express");
const app = express();
const { resolve } = require("path");
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());

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

    // If the payment intent is successful, there's no need to create a charge
    if (paymentIntent.status === "succeeded") {
      // Send a success response to the client
      res.send({ success: true });
    } else {
      // Handle any errors and send an error response to the client
      return res.status(400).send({
        error: {
          message: "Payment intent not successful",
        },
      });
    }
  } catch (e) {
    // Handle any errors and send an error response to the client
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});


// Add a webhook endpoint for the payment_intent.succeeded event
app.post("/webhook", async (req, res) => {
  const event = req.body;

  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        // Handle successful payment
        console.log("Payment succeeded:", event.data.object);
        break;
      default:
        // Unexpected event type
        console.log(`Unexpected event type: ${event.type}`);
    }

    // Send a 200 response to acknowledge receipt of the event
    res.json({ received: true });
  } catch (e) {
    // Handle any errors and send an error response to Stripe
    console.error(e);
    res.status(500).end();
  }
});

app.listen(3000, () =>
  console.log(`Node server listening at http://localhost:3000`)
);

//IGNORE 
// "scripts": {
//   "start": "node server",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "start:dev": "npm run build:dev & npm run start-server",
//   "build:dev": "npm run build -- --watch --mode=development",
//   "start-server": "node server -e html,js,scss --ignore public --ignore client"
// },
