const express = require('express');
const router = express.Router();
const OrderController = require('../controller/orderController');
const sellerAuthMiddleware = require('../middlewear/sellerAuthMiddlewear');


router.get('/', sellerAuthMiddleware, OrderController.getSellerOrders);
router.put('/:orderId/status/:orderStatus', sellerAuthMiddleware, OrderController.updateOrderStatus);

router.delete('/:orderId', sellerAuthMiddleware, OrderController.deleteOrder);

module.exports = router;