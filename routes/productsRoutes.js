const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const { validateProductName } = require('../middlewares/productsMiddleware');

const router = express.Router();

router.get('/:id', productsControllers.getProductById);
router.get('/', productsControllers.getAllProducts);

router.post('/', validateProductName, productsControllers.registerProduct);

router.put('/:id', validateProductName, productsControllers.editProduct);

module.exports = router;
