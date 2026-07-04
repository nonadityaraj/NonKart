const mongoose = require('mongoose')
const User = require('../model/User')
const Address = require('../model/address')
const Order = require("../model/order")
const OrderItem = require("../model/orderItem")
const OrderStatus = require("../domian/OrderStatus")




class OrderService {
    async createOrder(user,shippingAddress,cart ){
        if (shippingAddress._id && !user.addresses.includes(shippingAddress._id)){
            user.addresses.push(shippingAddress._id)
            await User.findByIdAndUpdate(user._id,user)
        }
        if (!shippingAddress._id){
            shippingAddress = await Address.create(shippingAddress)
            user.addresses.push(shippingAddress._id)
            await User.findByIdAndUpdate(user._id,user)
        }

        const itemsBySeller = cart.cartItem.reduce((acc,item)=>{
            const sellerId = item.product.seller.toString()
            acc[sellerId] = acc[sellerId] || [];
            acc[sellerId].push(item)
            return acc
        },{})

        const orders = []

        for (const [sellerId,cartItems] of Object.entries(itemsBySeller)){
            const totalSellingPrice = cartItems.reduce((sum,item)=>(
                    sum + item.sellingPrice),0)
            const totalMrpPrice = cartItems.reduce((sum,item)=>(
                    sum + item.mrpPrice),0)
            const totalItem = cartItems.reduce((sum,item)=>(
                    sum + item.quantity),0)

            const orderItemIds = await Promise.all(cartItems.map(async(item)=>{
                const orderItem = await OrderItem.create({
                    product:item.product._id,
                    quantity:item.quantity,
                    sellingPrice:item.sellingPrice,
                    mrpPrice:item.mrpPrice,
                    size:item.size,
                    userId:user._id,
                })
                return orderItem._id
            }))

            const newOrder = new Order({
                user:user._id,
                seller:sellerId,
                orderItems:orderItemIds,
                shippingAddress:shippingAddress._id,
                totalMrpPrice:totalMrpPrice,
                totalItem:totalItem,
                totalSellingPrice:totalSellingPrice,
            })

            const savedOrder = await newOrder.save()
            orders.push(savedOrder)
        }
        return orders
    }


    async getOrderById(orderId){
        if (!mongoose.Types.ObjectId.isValid(orderId)){
            throw new Error("Invalid Order Id")
        }

        const order = await Order.findById(orderId).populate([
            {path:"seller"},
            {path:"orderItems",populate:{path:"product"}},
            {path:"shippingAddress"},
        ])

        if (!order){
            throw new Error("Order Not Found")
        }
        return order
    }

    async getUserOrderHistory(userId){
        if (!mongoose.Types.ObjectId.isValid(userId)){
            throw new Error("Invalid User Id")
        }
        return await Order.find({user:userId}).populate([
            {path:"seller"},
            {path:"orderItems",populate:{path:"product"}},
            {path:"shippingAddress"},
        ])

    }

    async getSellerOrder(sellerId){
        if (!mongoose.Types.ObjectId.isValid(sellerId)){
            throw new Error("Invalid Seller Id")
        }
        return await Order.find({seller:sellerId})
        .sort({orderDate:-1})
        .populate([
            {path:"seller"},
            {path:"orderItems",populate:{path:"product"}},
            {path:"shippingAddress"},
        ])

    }


    async updateOrderStatus(orderId,status){
        if (!mongoose.Types.ObjectId.isValid(orderId)){
            throw new Error("Invalid Order Id")
        }

        return await Order.findByIdAndUpdate(orderId,{orderStatus:status}
        ,{new:true})
        .populate([
            {path:"seller"},
            {path:"orderItems",populate:{path:"product"}},
            {path:"shippingAddress"},
        ])
    }

    async cancelOrder(orderId,user){
        if (!mongoose.Types.ObjectId.isValid(orderId)){
            throw new Error("Invalid Order Id")
        }
        const order = await Order.findById(orderId)
        if (!order){
            throw new Error("Order Not Found")
        }
        if(user._id.toString() !== order.user.toString()){
            throw new Error("You are not authorized to cancel this order")
        }

        return await Order.findByIdAndUpdate(orderId,{orderStatus:OrderStatus.CANCELLED}
        ,{new:true})
        .populate([
            {path:"seller"},
            {path:"orderItems",populate:{path:"product"}},
            {path:"shippingAddress"},
        ])
    }

    async deleteOrder(orderId){
        if (!mongoose.Types.ObjectId.isValid(orderId)){
            throw new Error("Invalid Order Id")
        }
        const order = await Order.findByIdAndDelete(orderId)
        if (!order){
            throw new Error("Order Not Found")
        }
        return "Order deleted"
    }

    async findOrderItemById(orderItemId){
        if (!mongoose.Types.ObjectId.isValid(orderItemId)){
            throw new Error("Invalid Order Item Id")
        }
        const orderItem = await OrderItem.findById(orderItemId).populate("product")
        if (!orderItem){
            throw new Error("Order Item Not Found")
        }
        return orderItem
    }

}

module.exports = new OrderService()
