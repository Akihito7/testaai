const express = require('express');
const { getAll, getById, search } = require('../middleware');

const product = express.Router();

product
  .route('/search/:name')
  .get(search);

product
  .route('/:id')
  .get(getById)

product
  .route('/')
  .get(getAll)

module.exports = { product };