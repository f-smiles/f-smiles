const express = require("express");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/prices', require('./api/prices'));
app.use('/api/products', require('./api/products'));

app.use('/api', (req, res) => {
  res.send('/api connected!')
})

// error-handing middleware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});


const PORT = process.env.REACT_APP_PORT || 8080;
app.listen(PORT, () => console.log(`Node server listening at port ${PORT}`));