const express = require('express');
const router = express.Router();
const OrderController = require('../controller/orderController');
const authMiddleware = require('../middlewear/authMiddlewear');


router.post('/', authMiddleware, OrderController.createOrder);
router.get('/user', authMiddleware, OrderController.getUserOrderHistory);
router.get('/item/:orderItemId', authMiddleware, OrderController.getOrderItemById);
router.get('/:orderId', authMiddleware, OrderController.getOrderById);
router.put('/:orderId/cancel', authMiddleware, OrderController.cancelOrder);


module.exports = router;