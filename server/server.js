require("dotenv").config();

const express = require("express");
const cors = require('cors');
// const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/prices', require('./api/prices'));
app.use('/api/v1/products', require('./api/products'));
app.use('/api/v1/checkout', require('./api/stripe'));
app.use('/api/v1/webhook', require('./api/webhook'));

// error-handing middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


const PORT = process.env.REACT_APP_PORT || 8080;
app.listen(PORT, () => console.log(`Node server listening at port ${PORT}`));