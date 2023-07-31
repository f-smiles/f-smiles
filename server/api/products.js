const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);

// GET /api/v1/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);
    const price = await stripe.prices.retrieve(product.default_price);
    res.status(200).json({ product, price });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/products
router.get("/", async (req, res, next) => {
  try {
    const { data } = await stripe.products.search({
      query: 'active:\'true\'',
      limit: 100,
    });
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});