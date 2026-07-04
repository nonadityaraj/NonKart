const cartServices = require("../service/cartServices");
const productService = require('../service/productService')
const cartItemServices = require("../service/cartItemServices")


class CartController{

    async findUserCartHandler(req,res){
        try{
            const user =  req.user
            const cart = await cartServices.findUserCart(user)
            res.status(200).json(cart)
        }catch(err){
            res.status(500).json({error:err.message})
        }
    }

    async addItemToCart(req,res){
        try {
            const user = req.user
            const product = await productService.findProductbyId(req.body.productId)
            const cartItem = await cartServices.addCartItem(
                user,
                product,
                req.body.size,
                req.body.quantity
            )
            res.status(200).json(cartItem)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    async deleteCartItemHandler(req,res){
        try{
            const user = await req.user
            await cartItemServices.removeCartItem(
                user._id,
                req.params.cartItemId
            )
            res.status(202).json({message:"Item removed from cart"})
        }catch(error){
            res.status(500).json({error:error.message})
        }
    }


    async updateCartItemHandler(req,res){
        try{
            const user = await req.user
            const quantity = req.body.quantity
            let updatedCartItem;
            if (quantity>0){
            updatedCartItem=await cartItemServices.updateCartItem(
                user._id,
                req.params.cartItemId,
                req.body
                
            )
            res.status(202).json(updatedCartItem)
        }else {
            res.status(400).json({message:"quantity must be positive"})
        }
           
        }catch(error){
            res.status(500).json({error:error.message})
        }
    }



}

module.exports = new CartController();