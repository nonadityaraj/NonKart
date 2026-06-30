const UserRoles = require("../domian/UserRole")
const authService = require("../service/authService")
const AuthServices = require("../service/authService")



class authController{


    async sendLoginOtp(req,res){
        try{
            const email = req.body.email
            await AuthServices.sendLoginOtp(email)
            res.status(200).json({message:'otp sent successfully'})
        }
        catch(err){
            res.status(err instanceof Error? 404:500).json({message:err.message})
        }
    }

    async signin(req,res){
        try{
            const result = await authService.signin(req.body)
            res.status(200).json(result)}
        catch(err){
            res.status(err instanceof Error? 404:500).json({message:err.message})
        }
    }
    async createUser(req,res){
        try {
            const jwt = await authService.createUser(req.body)
            const result = {
                jwt,
                message:"User Created Successfully",
                role:UserRoles.CUSTOMER
            }
            res.status(200).json(result)
        } catch (error) {
            res.status(error instanceof Error? 404:500).json({message:error.message})
        }
    }
}

module.exports = new authController();