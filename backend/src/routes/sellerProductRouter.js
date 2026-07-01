const express = require('express');
const productController = require('../controller/productController');
const sellerMiddlewear = require('../middlewear/sellerAuthMiddlewear');
const router = express.Router();


router.get(
    '/',
    sellerMiddlewear,
    productController.getProductBySellerId
)

router.post(
    '/',
    sellerMiddlewear,
    productController.createProduct
)

router.delete(
    '/:productId',
    sellerMiddlewear,
    productController.deleteProduct
)

router.put(
    '/:productId',
    sellerMiddlewear,
    productController.updateProduct
)


module.exports = router