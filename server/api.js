// const router = require("express").Router();
// const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY, {
//     apiVersion: "2022-11-15",
//   });
// module.exports = router;



// router.post('/payments', async (req, res) => {
//     try {
//       const { token, paymentIntent } = req.body;
//       const customer = await stripe.customers.create({
//         email: token.email,
//         source: token.id
//       });
//       const intent = await stripe.paymentIntents.confirm(paymentIntent, {
//         customer: customer.id,
//         payment_method: token.card.id
//       });
//       res.sendStatus(200);
//     } catch (error) {
//       console.error(error);
//       res.sendStatus(500);
//     }
//   });