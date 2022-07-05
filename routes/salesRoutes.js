const express = require('express');

const salesControllers = require('../controllers/salesControllers');
// const { validateProductId } = require('../middlewares/validateProductId');
// const { validateQuantity } = require('../middlewares/validateQuantity');

const routerSales = express.Router();

routerSales.get('/:id', salesControllers.getSaleById);
routerSales.get('/', salesControllers.getAllSales);

// routerSales.post('/', validateProductId, validateQuantity, salesControllers.registerSale);

// routerSales.put('/:id', validateProductId, validateQuantity, salesControllers.editSale);

// routerSales.delete('/:id', salesControllers.deleteSale);

module.exports = routerSales;