const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    cartItem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CartItem'
    }],
    totalSellingPRoce:{
        type:Number,
        default:0
    },
    totalItem:{
        type:Number,
        default:0
    },
    totalMrpPrice:{
        type:Number,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    cuponCode:{
        type:Number,
        default:null
    },
    cuponCodePrice:{
        type:Number,
        default:0
    }
},{timestamps:true})

const Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart;