const router = require('express').Router();
module.exports = router;

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_TEST_KEY);

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    // const products = await stripe.products.list();
    const products = await stripe.products.search({
      // only get the active products in stripe dashboard, not archived
      query: 'active: "true"'
    });
    res.json(products.data);
  } catch (err) {
    next(err);
  }
});
