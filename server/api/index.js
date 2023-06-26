const router = require('express').Router();
module.exports = router;

router.use('/prices', require('./prices'));
router.use('/products', require('./products'));
router.use('/checkout', require('./checkout'));