const UserRoles = require("../domian/UserRole");

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    userName :{type:String, required:true},
    email : {type:String, required:true, unique:true},
    mobile :{type:String},
    password :{type:String, required:true},
    addresses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"

    }],
    role:{
        type:String,
        enum:[UserRoles.CUSTOMER,UserRoles.ADMIN],
        default:UserRoles.CUSTOMER
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = User;