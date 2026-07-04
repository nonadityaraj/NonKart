const CartService = require('../service/cartServices');
const OrderService = require('../service/orderService');


class OrderController {


    async createOrder(req, res) {
        const {shippingAddress} = req.body;
        const {paymentMethod} = req.body;

        try{
            const user = await req.user
            const cart = await CartService.findUserCart(user)
            const orders = await OrderService.createOrder(user, shippingAddress, cart)
            // const paymentOrder = await PaymentService.createOrder(user,orders)

            return res.status(200).json({message: 'Order created successfully', data: {orders, paymentMethod}});
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Failed to create order', error: error.message});
        }
    }

    async getOrderById(req, res) {
        try{
            const {orderId} = req.params;
            const order = await OrderService.getOrderById(orderId);
            if (!order) {
                return res.status(404).json({message: 'Order not found'});
            }
            return res.status(200).json({message: 'Order retrieved successfully', data: order});
        }catch (error) {
            console.error(error);
            return res.status(500).json({message: 'Failed to get order', error: error.message});
        }


    }


    async getOrderItemById(req, res) {  
        try{
            const {orderItemId} = req.params;
            const orderItem = await OrderService.findOrderItemById(orderItemId)
            return res.status(200).json({message: 'Order Item retrieved successfully', data: orderItem});
        }catch (error) {   
            return res.status(401).json({message: 'Failed to get order item', error: error.message});
        }
    }

    async getUserOrderHistory(req, res) {
        try{
            const userId = req.user._id;
            const orders = await OrderService.getUserOrderHistory(userId);
            return res.status(200).json({message: 'User order history retrieved successfully', data: orders});
        }catch (error) {
            return res.status(500).json({message: 'Failed to get user order history', error: error.message});
        }
    }


    async getSellerOrders(req, res) {
        try{
            const sellerId = req.seller._id;
            const orders = await OrderService.getSellerOrder(sellerId);
            return res.status(200).json({message: 'Seller order history retrieved successfully', data: orders});
        }catch (error) {
            return res.status(500).json({message: 'Failed to get seller order history', error: error.message});
        }
    }

    async updateOrderStatus(req, res) {
        try{
            const {orderId} = req.params;
            const {orderStatus} = req.params;
            const order = await OrderService.updateOrderStatus(orderId, orderStatus);
            return res.status(200).json({message: 'Order status updated successfully', data: order});
        }
        catch (error) {
            return res.status(500).json({message: 'Failed to update order status', error: error.message});
        }
    }

    async deleteOrder(req, res) {
        try{
            const {orderId} = req.params;
            const result = await OrderService.deleteOrder(orderId);
            return res.status(200).json({message: 'Order deleted successfully', data: result});
        }
        catch (error) {
            return res.status(500).json({message: 'Failed to delete order', error: error.message});
        }
    }

    async cancelOrder(req, res) {
        try{
            const {orderId} = req.params;
            const user = req.user;
            const order = await OrderService.cancelOrder(orderId, user);
            return res.status(200).json({message: 'Order cancelled successfully', data: order});
        }
        catch (error) {
            return res.status(500).json({message: 'Failed to cancel order', error: error.message});
        }
    }
}


module.exports = new OrderController();