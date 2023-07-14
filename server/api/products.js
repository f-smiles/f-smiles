const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

// GET /api/v1/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/products
router.get("/", async (req, res, next) => {
  try {
    // only get the active products in stripe dashboard, not archived
    const products = await stripe.products.list({
      active: "true",
    });
    res.json(products.data);
  } catch (err) {
    next(err);
  }
});
