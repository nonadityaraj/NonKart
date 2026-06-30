const { default: mongoose } = require("mongoose");

const OtpCode = new mongoose.Schema({
    otp:{type:String},
    email:{
        type:String,
        required:true
    }
})


const VerificationCode = mongoose.model("VerificationCode", OtpCode)
module.exports = VerificationCode;