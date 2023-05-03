const path = require('path');

module.exports = {
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3001,
  },
  setupMiddlewares: [
    (req, res, next) => {
      console.log(`Request: ${req.method} ${req.url}`);
      next();
    }
  ],
  
};
