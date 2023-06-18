const router = require('express').Router();
module.exports = router;

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_TEST_KEY);

// GET /api/prices/:id
router.get('/:id', async (req, res, next) => {
  try {
    const price = await stripe.prices.retrieve(req.params.id);
    res.json(price);
  } catch (err) {
    next(err);
  }
});

// GET /api/prices
router.get('/', async (req, res, next) => {
  try {
    // const prices = await stripe.prices.list();
    const prices = await stripe.prices.search({
      // only get the active prices in stripe dashboard, not archived
      query: 'active: "true"',
    })
    res.json(prices.data);
  } catch (err) {
    next(err);
  }
});
