const mongoose = require('mongoose')


const cartItemSchema = mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    mrpPrice:{
        type:Number,
        required:true
    },
    selllingPrice:{
        type:Number,
        required:true
    },

    userId:{
        type:String,
        required:true
    }
})

const CartItem = mongoose.model("CartItem", cartItemSchema)
module.exports = CartItem