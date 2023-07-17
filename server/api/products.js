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
    const pricesResponse = await stripe.prices.list({
      active: "true",
    });
    const productsResponse = await stripe.products.list({
      active: "true",
    });
    const prices = pricesResponse.data;
    const products = productsResponse.data;

    const priceMap = {};
    products.forEach((product) => {
      priceMap[product.id] = {
        product,
        price: null,
      };
    });

    prices.forEach((price) => {
      const productId = price.product;
      if (priceMap[productId]) {
        priceMap[productId].price = price;
      }
    });

    const pricesWithProducts = Object.values(priceMap);
    res.json(pricesWithProducts);
  } catch (err) {
    next(err);
  }
});
