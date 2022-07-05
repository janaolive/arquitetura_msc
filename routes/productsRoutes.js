const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const validateProductName = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/:id', productsControllers.getProductById);
router.get('/', productsControllers.getAllProducts);

router.post('/', validateProductName, productsControllers.registerProduct);

router.put('/:id', validateProductName, productsControllers.editProduct);

router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;
