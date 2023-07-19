const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

// GET /api/v1/checkout/sessions/:id/line_items
router.get("/sessions/:id/line_items", async (req, res) => {
  const Stripe = require("stripe");
  const stripe = Stripe(process.env.REACT_APP_STRIPE_TEST_KEY);
  stripe.checkout.sessions.listLineItems(
    req.params.id,
    { limit: 5 },
    function (err, lineItems) {
      // asynchronously called
    }
  );
});

// GET /api/v1/checkout/sessions/:id
router.get("/sessions/:id", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.params.id);
  return session;
});

// GET /api/v1/checkout/sessions
router.get("/sessions", async (req, res) => {
  const sessions = await stripe.checkout.sessions.list();
  return sessions;
});

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
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    line_items: lineItems,
    mode: "payment",
    success_url: `http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/bag`,
    automatic_tax: { enabled: true },
  });
  res.send({ url: session.url });
});
