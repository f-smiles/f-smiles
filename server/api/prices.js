const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

// GET /api/v1/prices/:id
router.get("/:id", async (req, res, next) => {
  try {
    const price = await stripe.prices.retrieve(req.params.id);
    res.status(200).json(price);
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/prices
router.get("/", async (req, res, next) => {
  try {
    const { data } = await stripe.prices.search({
      query: 'active:\'true\''
    });
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});



// const router = require("express").Router();
// module.exports = router;

// const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

// // GET /api/v1/prices/:id
// router.get("/:id", async (req, res, next) => {
//   try {
//     const price = await stripe.prices.retrieve(req.params.id);
//     res.json(price);
//   } catch (err) {
//     next(err);
//   }
// });

// // GET /api/v1/prices
// router.get("/", async (req, res, next) => {
//   try {
//     // only get the active prices in stripe dashboard, not archived
//     const prices = await stripe.prices.list({
//       active: "true",
//     });
//     res.json(prices.data);
//   } catch (err) {
//     next(err);
//   }
// });
