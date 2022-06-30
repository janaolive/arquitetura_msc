const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const {
  validateProductName,
  validateProductQuantity,
  } = require('../middlewares/productsMiddleware');

const router = express.Router();

router.get('/:id', productsControllers.getProductById);
router.get('/', productsControllers.getAllProducts);

router.post('/', validateProductName, validateProductQuantity, productsControllers.registerProduct);

module.exports = router;
