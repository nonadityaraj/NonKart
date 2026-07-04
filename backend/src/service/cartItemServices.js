const CartItem = require('../model/cartItem')

class CartItemService{

    async removeCartItem(userId,cartItemId){
        const cartItem = await this.findCartItembyId(cartItemId)
        if (cartItem.userId.toString() === userId.toString()){
            await CartItem.deleteOne({_id:cartItem._id})
        }else{
            throw new Error("Unauthorized access")
        }
    }

    async findCartItembyId(cartItemId){
        const cartItem = await CartItem.findById(cartItemId).populate("product")

        if (!cartItem){
            throw new Error("Cart Item not found")

        }
        return cartItem
    }

    async updateCartItem(userId,cartItemId,cartItemData){
        const cartItem = await this.findCartItembyId(cartItemId)
        if (cartItem.userId.toString() === userId.toString()){
            const updated = {
                quantity:cartItemData.quantity,
                mrpPrice:cartItemData.quantity*cartItem.product.mrpPrice,
                sellingPrice: cartItemData.quantity*cartItem.product.sellingPrice
    }
        return await CartItem.findByIdAndUpdate(cartItemId,updated,{new:true}).populate("product")
        }else{
            throw new Error("Unauthorized access")
        }
    }
}


module.exports = new CartItemService();