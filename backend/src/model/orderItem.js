const mongoose = require('mongoose');


const orderItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },  
    size:{
        type:String,
        required:true   
    },
    mrpPrice:{
        type:Number,
        required:true  
    },
    sellingPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

const OrderItem = mongoose.model('OrderItem',orderItemSchema)

module.exports = OrderItem
