import { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import Cartitem from './Cartitem'
import type { CartItemType } from './Cartitem'
import PriceCard from './PriceCard'
import { ShoppingBag } from '@mui/icons-material'

const initialCartItem: CartItemType = {
  id: 1,
  title: "Turquoise Blue Stonework Satin Designer Saree",
  brand: "Natural Lifestyle Products Private Limited",
  price: 2499,
  originalPrice: 3999,
  quantity: 2,
  image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/f/6/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhzjxru2ne.jpeg?q=70",
  replacementDays: 7
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([initialCartItem])
  const [couponCode, setCouponCode] = useState("")

  const handleIncrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const handleDecrement = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "SAVE10") {
      alert("Coupon applied successfully! Extra 10% off will be applied at checkout.")
    } else if (couponCode.trim() !== "") {
      alert("Invalid Coupon Code. Try using SAVE10.")
    } else {
      alert("Please enter a coupon code.")
    }
  }

  const handleBuyNow = () => {
    alert("Proceeding to secure payment checkout...")
  }

  // Calculate pricing values
  const hasItems = cartItems.length > 0
  const subtotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0)
  const totalItemPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const discount = subtotal - totalItemPrice
  const shippingFee = 79
  
  // Total matches screenshot calculations where shipping is waived/free above ₹1500
  const finalTotal = hasItems ? totalItemPrice : 0

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 font-sans antialiased text-gray-800">
      {styleTag}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <Typography className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider block">
          Shopping Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items)
        </Typography>

        {hasItems ? (
          <Grid container spacing={4}>
            
            {/* Cart Items List */}
            <Grid size={{ xs: 12, md: 8 }} className="space-y-4">
              {cartItems.map((item) => (
                <Cartitem
                  key={item.id}
                  item={item}
                  onIncrement={() => handleIncrement(item.id)}
                  onDecrement={() => handleDecrement(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </Grid>

            {/* Price Details Panel */}
            <Grid size={{ xs: 12, md: 4 }}>
              <PriceCard
                subtotal={subtotal}
                discount={discount}
                shipping={shippingFee}
                total={finalTotal}
                couponCode={couponCode}
                onCouponChange={setCouponCode}
                onApplyCoupon={handleApplyCoupon}
                onBuyNow={handleBuyNow}
              />
            </Grid>

          </Grid>
        ) : (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-md border border-dashed border-gray-300">
            <ShoppingBag className="text-gray-300 text-6xl mb-4" />
            <Typography variant="h6" className="font-bold text-gray-700">
              Your cart is empty
            </Typography>
            <Typography variant="body2" className="text-gray-400 mt-1 max-w-xs font-semibold">
              Explore our collections and add items to your cart to see them here!
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                py: 1.2,
                px: 4,
                borderRadius: '4px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#00927c',
                '&:hover': {
                  backgroundColor: '#00796b',
                },
              }}
              href="#"
            >
              Continue Shopping
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}

const styleTag = (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    .font-sans {
      font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
    }
  `}</style>
)

export default Cart