const express = require("express");
const app = express();
const { resolve } = require("path");
const cors = require("cors"); // Import cors middleware
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY, {
  apiVersion: "2022-11-15",
});

app.use(express.static(process.env.STATIC_DIR));
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

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
    const { token_id, amount } = req.body;

    // Create a charge using the token and amount
    await stripe.charges.create({
      amount: amount,
      currency: "USD",
      source: token_id,
      description: "Charge for test@example.com",
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

