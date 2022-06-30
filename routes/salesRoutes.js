const express = require('express');

const salesControllers = require('../controllers/salesControllers');
const {
  validateSalesId,
  validateSalesQuantity,
  validateProductId } = require('../middlewares/salesMiddleware');

const router = express.Router();

router.get('/:id', salesControllers.getSaleById);
router.get('/', salesControllers.getAllSales);

router.post('/', validateSalesId, validateSalesQuantity, validateProductId, 
  salesControllers.registerSale);

module.exports = router;