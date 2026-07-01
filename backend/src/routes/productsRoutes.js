const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/search', productController.searchProduct)

router.get('/', productController.getAllProducts)

router.get('/:productId',productController.getProductById)


module.exports = router