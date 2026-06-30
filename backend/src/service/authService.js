const VerificationCode = require("../model/OtpCode");
const Seller = require("../model/seller");
const generateOtp = require("../util/generateOtp");
const sendOtp = require("../util/sendVerificationCode");
const bcrypt = require('bcrypt')
const User = require('../model/User')
const Cart = require('../model/cart')
const jwtProvider = require('../util/jwtProvider')

class AuthServices{

    async sendLoginOtp(email){
        try {
            const user = await User.findOne({email})
            if (!user) {
                throw new Error("Invalid Email")
            }

            const exisitngVerificationCode  = await VerificationCode.findOne({email})
            if (exisitngVerificationCode) {await VerificationCode.deleteOne({email})}
            const otp = generateOtp()
            await VerificationCode.create({otp,email})

            //send email to user
            const subject = "NONKart Login/SignUp OTP"
            const body = `Your Login/SignUp Otp is ${otp}. Please Donot Share to anyone`
            await sendOtp(email,subject,body)
        } catch (error) {
            throw error;
        }
    }


    async createUser(req){
        try {
            let {userName,email,password} = req
            let user = await User.findOne({email:email})
            if (user){
                throw new Error("Email already existed")
            }
            user = await  User.create({
                email,
                userName,
                password: await bcrypt.hash(password,10)
            })
            const cart = await Cart.create({user:user._id})
            return jwtProvider.createJwt({email})
        } catch (error) {
            throw new Error(error);
        }
    }


    async signin(req){
        const {email,otp} = req;
        const user = await User.findOne({email});
        if (!user){
            throw new Error("User Not Found")
        }
        const verificationCode = await VerificationCode.findOne({email})

        if(!verificationCode || verificationCode.otp !==otp){
            throw new Error ("Invalid Otp")
        }
        return {
            message:"login Success",
            token : jwtProvider.createJwt({email}),
            role: user.role
        }
    }
}

module.exports = new AuthServices();