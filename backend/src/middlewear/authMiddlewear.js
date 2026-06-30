const sellerService = require("../service/sellerService");
const jwtProvider = require("../util/jwtProvider");
const userService = require('../service/userServices')

const authMiddlewear = async(req,res,next) =>{
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(401).json({
                message :"Invalid token, authorization failed"
            })
        }
        const token = authHeader.split(' ')[1];

        if (!token){
            return res.status(401).json({
                message :"Invalid token, authorization failed"
            })
        }

        let email = jwtProvider.getEmailFromjwt(token);
        const user = await userService.findUserByEmail(email);
        req.user = user;
        next();


    } catch (error) {
        res.status(401).json({
                message :"Invalid token, authorization failed"
        })
    }
}

module.exports  = authMiddlewear;