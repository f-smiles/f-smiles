const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

// POST /api/v1/checkout/sessions
router.post("/sessions/create-checkout-session", async (req, res) => {
  const lineItems = req.body.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.description,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    allow_promotion_codes: true,
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/bag`,
    automatic_tax: { enabled: true },
  });
  res.send({ url: session.url });
});
