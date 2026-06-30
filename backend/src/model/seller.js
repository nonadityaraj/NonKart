const mongoose = require('mongoose')
const UserRoles = require('../domian/UserRole')
const accountStatus = require('../domian/accountStatus')


const sellerSchema = new mongoose.Schema({
    sellerName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    bussinessDetails:{
        bussinessName:{
            type:String,
            required:true,
        },
        bussinessEmail:{
            type:String,
            required:true,
        },
        bussinessMobile:{
            type:String
        },
        bussinessAddress:{
            type:String
        }
    },
    bankDetails:{
        accountHolderName:{
            type:String
        },
        accountNumber:{
            type:String
        },
        bankName:{
            type:String
        },
        ifscCode:{
            type:String
        }
    },
    pickupAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    GSTIN:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:[UserRoles.SELLER],
        default:UserRoles.SELLER
    },
    accountStatus:{
        type:String,
        enum:[
            accountStatus.ACTIVE,
            accountStatus.SUSPENDED,
            accountStatus.DEACTIVATED,
            accountStatus.BANNED,
            accountStatus.CLOSED,
            accountStatus.PENDING_VERIFICATION],
        default:accountStatus.PENDING_VERIFICATION
    }
    
},{timestamps:true})


const seller= mongoose.model("seller",sellerSchema);
module.exports = seller 