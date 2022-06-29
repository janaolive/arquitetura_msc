const express = require('express');

const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/:id', productsControllers.getProductById);
router.get('/', productsControllers.getAllProducts);

module.exports = router;
