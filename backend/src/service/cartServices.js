const Cart = require('../model/cart');
const CartItem = require('../model/cartItem');
const { calculateDiscountPercentage } = require('./productService');

class CartService{

    async findUserCart(user){
        let cart = await Cart.findOne({user:user_.id})
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = cart.cartItem.length

        cart.cartItem.forEach((e)=>{
            totalPrice+=e.mrpPrice;
            totalDiscountedPrice+=e.selllingPrice
        })
        cart.totalMrpPrice = totalPrice
        cart.totalSellingPRoce = totalDiscountedPrice
        cart.totalItem = totalItem
        cart.discount = calculateDiscountPercentage(totalPrice,totalDiscountedPrice)
        let cartItems = await CartItem.find({cart:cart._id}).populate('product')
        cart.cartItem = cartItem
        return cart;
    }

    async addCartItem(user,product,size,quantity){
        const cart = await this.findUserCart(user)

        let isPresent = CartItem.findOne({cart:cart._id,
            product:product._id,
            size:size
        }).populate('product')

        if (!isPresent){
            const cartItem = CartItem({
                product,
                quantity,
                userId:user._id,
                selllingPrice: quantity*selllingPrice,
                mrpPrice :quantity*mrpPrice,
                size,
                cart:cart._id
            })
            await cartItem.save()
        }
    }
}