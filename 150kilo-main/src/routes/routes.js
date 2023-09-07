const { Router } = require('express');
const products = require('./products.routes');

const routes = Router();

routes.use('/products', products );

module.exports = routes;