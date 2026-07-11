import { Button, Divider, Typography } from '@mui/material'
import { Favorite, LocalOffer } from '@mui/icons-material'

interface PriceCardProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode: string;
  onCouponChange: (code: string) => void;
  onApplyCoupon: () => void;
  onBuyNow: () => void;
}

const PriceCard = ({
  subtotal,
  discount,
  shipping,
  total,
  couponCode,
  onCouponChange,
  onApplyCoupon,
  onBuyNow,
}: PriceCardProps) => {
  return (
    <div className="space-y-4 font-sans text-gray-800">
      
      {/* Apply Coupons Card */}
      <div className="border border-gray-200 rounded-md p-4 bg-white space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
          <LocalOffer className="text-[#00927c]" fontSize="small" />
          <span>Apply Coupons</span>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="coupon code"
            value={couponCode}
            onChange={(e) => onCouponChange(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c] transition-colors"
          />
          <button 
            onClick={onApplyCoupon}
            className="text-[#00927c] font-bold text-xs uppercase tracking-wider px-2 py-1 hover:bg-teal-50/50 rounded transition-colors"
          >
            APLLY
          </button>
        </div>
      </div>

      {/* Price Details Card */}
      <div className="border border-gray-200 rounded-md p-4 bg-white space-y-4 shadow-2xs">
        
        {/* Charges list */}
        <div className="space-y-2.5">
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Discount</span>
            <span>₹ {discount}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Shipping</span>
            <span>₹ {shipping}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>plateform fee</span>
            <span className="text-[#00927c] font-bold">Free</span>
          </div>
        </div>

        <Divider className="border-gray-100" />

        {/* Total Price */}
        <div className="flex justify-between text-base font-bold text-gray-900">
          <span>Total</span>
          <span>₹ {total}</span>
        </div>

        {/* Buy Now Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={onBuyNow}
          sx={{
            py: 1.5,
            borderRadius: '4px',
            fontWeight: 'bold',
            textTransform: 'none',
            fontSize: '0.95rem',
            backgroundColor: '#00927c',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#00796b',
              boxShadow: 'none',
            },
          }}
        >
          BUY NOW
        </Button>
      </div>

      {/* Wishlist Link Card */}
      <div className="border border-gray-200 rounded-md p-4 bg-white flex justify-between items-center shadow-2xs hover:bg-gray-50/20 cursor-pointer transition-colors group">
        <Typography className="text-sm font-semibold text-gray-600 group-hover:text-gray-800">
          Add From Whishlist
        </Typography>
        <Favorite className="text-[#00927c] group-hover:scale-110 transition-transform" />
      </div>

    </div>
  )
}

export default PriceCard