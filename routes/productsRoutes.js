const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const validateProductName = require('../middlewares/validateProductName');

const routerProducts = express.Router();

routerProducts.get('/:id', productsControllers.getProductById);
routerProducts.get('/', productsControllers.getAllProducts);

routerProducts.post('/', validateProductName, productsControllers.registerProduct);

routerProducts.put('/:id', validateProductName, productsControllers.editProduct);

routerProducts.delete('/:id', productsControllers.deleteProduct);

module.exports = routerProducts;
