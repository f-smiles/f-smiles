const router = require('express').Router();
module.exports = router;

const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_TEST_KEY);
const endpointWhsec = process.env.REACT_APP_WHSEC;

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
}

// POST /api/v1/webhook
router.post('/', bodyParser.raw({type: 'application/json'}, async (request, response) => {
  const payload = request.body
  const sig = request.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointWhsec)
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`)
  }

   // Handle the checkout.session.completed event
   if (event.type === 'checkout.session.completed') {
    // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      }
    );
    const lineItems = sessionWithLineItems.line_items;

    // Fulfill the purchase...
    fulfillOrder(lineItems);
  }


  console.log('Got payload: ' + payload);
  response.status(200).end()
}))
