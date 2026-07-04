const Cart = require('../model/cart');
const CartItem = require('../model/cartItem');
const { calculateDiscountPercentage } = require('./productService');

class CartService{

    async findUserCart(user){
        let cart = await Cart.findOne({user:user._id})
        if (!cart){
            cart = await Cart.create({user:user._id})
        }

        let cartItems = await CartItem.find({cart:cart._id}).populate('product')

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        cartItems.forEach((e)=>{
            totalPrice+=e.mrpPrice;
            totalDiscountedPrice+=e.sellingPrice
        })

        cart.totalMrpPrice = totalPrice
        cart.totalSellingPRoce = totalDiscountedPrice
        cart.totalItem = cartItems.length
        cart.discount = totalPrice>0 ? calculateDiscountPercentage(totalPrice,totalDiscountedPrice) : 0
        cart.cartItem = cartItems.map(item=>item._id)
        await cart.save()

        cart.cartItem = cartItems
        return cart;
    }

    async addCartItem(user,product,size,quantity){
        const cart = await this.findUserCart(user)

        let isPresent = await CartItem.findOne({cart:cart._id,
            product:product._id,
            size:size
        }).populate('product')

        if (!isPresent){
            const cartItem = new CartItem({
                product:product._id,
                quantity,
                userId:user._id,
                sellingPrice: quantity*product.sellingPrice,
                mrpPrice :quantity*product.mrpPrice,
                size,
                cart:cart._id
            })
            const createdCartItem = await cartItem.save()
            cart.cartItem.push(createdCartItem)
            await Cart.findByIdAndUpdate(cart._id,{$push:{cartItem:createdCartItem._id}})
            return await createdCartItem.populate('product')
        }
        return isPresent
    }
}

module.exports = new CartService();