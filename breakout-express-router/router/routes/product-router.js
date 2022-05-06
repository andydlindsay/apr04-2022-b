const express = require('express');
const productQueries = require('../db/product-queries');

const router = express.Router();

// GET /products/
router.get('/', (req, res) => {
  productQueries.getProducts()
    .then((products) => {
      // res.render();
      // res.send();
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productQueries.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
