const sellerService = require("../service/sellerService");
const jwtProvider = require("../util/jwtProvider");

const sellerMiddlewear = async(req,res,next) =>{
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
        next();

        let email = jwtProvider.getEmailFromjwt(token);
        const seller = sellerService.getSellerByEmail(email);
        req.seller = seller;

    } catch (error) {
        res.status(401).json({
                message :"Invalid token, authorization failed"
        })
    }
}

module.exports  = sellerMiddlewear;