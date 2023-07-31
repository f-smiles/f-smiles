const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

router.get("/checkout/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res.send(`<html><body><h1>Thanks for your order!</h1></body></html>`);
});
