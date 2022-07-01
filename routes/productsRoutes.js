const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const { validateProductName } = require('../middlewares/productsMiddleware');

const router = express.Router();

router.get('/:id', productsControllers.getProductById);
router.get('/', productsControllers.getAllProducts);

router.post('/', validateProductName, productsControllers.registerProduct);

module.exports = router;
