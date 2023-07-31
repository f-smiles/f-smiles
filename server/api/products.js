const router = require("express").Router();
module.exports = router;

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_TEST_KEY);

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

// // GET /api/v1/products/:id
// // router.get("/:id", async (req, res, next) => {
// //   try {
// //     const product = await stripe.products.retrieve(req.params.id);
// //     res.json(product);
// //   } catch (err) {
// //     next(err);
// //   }
// // });

// // GET /api/v1/products/:id
// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const productResponse = await stripe.products.retrieve(id);
//     const priceResponse = await stripe.prices.list({
//       active: "true",
//       product: id,
//     });

//     const product = productResponse;
//     const prices = priceResponse.data;

//     const price = prices.length > 0 ? prices[0] : null;
//     const pairedProduct = { ...product, price };

//     res.json({ pairedProduct });
//   } catch (err) {
//     next(err);
//   }
// });

// // GET /api/v1/products
// router.get("/", async (req, res, next) => {
//   try {
//     const pricesResponse = await stripe.prices.list({
//       active: "true",
//     });
//     const productsResponse = await stripe.products.list({
//       active: "true",
//     });
//     const prices = pricesResponse.data;
//     const products = productsResponse.data;

//     const productsWithPrice = products.map(product => {
//       const price = prices.find(price => price.product === product.id);
//       return { ...product, price };
//     });

//     res.json(productsWithPrice);

//     // const priceMap = {};
//     // products.forEach((product) => {
//     //   priceMap[product.id] = {
//     //     product,
//     //     price: null,
//     //   };
//     // });

//     // prices.forEach((price) => {
//     //   const productId = price.product;
//     //   if (priceMap[productId]) {
//     //     priceMap[productId].price = price;
//     //   }
//     // });

//     // const pricesWithProducts = Object.values(priceMap);
//     // res.json(pricesWithProducts);
//   } catch (err) {
//     next(err);
//   }
// });
