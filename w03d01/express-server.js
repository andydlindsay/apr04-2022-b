const express = require('express');
const morgan = require('morgan');
const port = 3001;

// create the express server/application
const app = express();

// middleware
app.use((request, response, next) => {
  request.crimeBoss = 'boba fett';
  next();
});
app.use(morgan('dev'));

// const morganMiddleware = morgan('dev'); // (req, res, next) => {}
// app.use(morganMiddleware);

// GET /about
app.get('/about', (request, response) => {
  response.send('this is the about page');
  console.log(request.crimeBoss);
});

// GET /products
app.get('/products', (request, response) => {
  response.send('<h2>all the products in the database</h2>');
});

// catchall endpoint using the wildcard ("*")
app.get('*', (request, response) => {
  response.status(500); // set an arbitrary status; could be any valid status code
  return response.send('my custom 418 page');

  // response.status(404).send('my custom 404 page');
});

// tell the express app to listen on the provided port
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
