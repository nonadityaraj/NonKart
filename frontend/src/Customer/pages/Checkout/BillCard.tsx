import { Button, Divider, Radio, Typography } from '@mui/material'

interface BillCardProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  selectedGateway: 'razorpay' | 'stripe';
  onGatewayChange: (gateway: 'razorpay' | 'stripe') => void;
  onCheckout: () => void;
}

const BillCard = ({
  subtotal,
  discount,
  shipping,
  total,
  selectedGateway,
  onGatewayChange,
  onCheckout,
}: BillCardProps) => {
  return (
    <div className="space-y-4 font-sans text-gray-800">
      
      {/* Payment Gateway Box */}
      <div className="border border-gray-200 rounded-md p-4 bg-white space-y-3 shadow-2xs">
        <Typography className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">
          Chose Payment Gatway
        </Typography>
        
        <div className="flex gap-3">
          {/* Razorpay Gateway Card */}
          <div 
            onClick={() => onGatewayChange('razorpay')}
            className={`flex items-center gap-3 border p-3 rounded-md cursor-pointer flex-1 transition-all ${
              selectedGateway === 'razorpay' ? 'border-[#00927c] bg-teal-50/10 shadow-xs' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Radio 
              checked={selectedGateway === 'razorpay'} 
              onChange={() => onGatewayChange('razorpay')} 
              size="small" 
              sx={{ p: 0, '&.Mui-checked': { color: '#00927c' } }} 
            />
            <span className="font-extrabold text-[#0292e6] text-sm italic tracking-tight">
              <span className="text-[#00c8ff]">▲</span> Razorpay
            </span>
          </div>

          {/* Stripe Gateway Card */}
          <div 
            onClick={() => onGatewayChange('stripe')}
            className={`flex items-center gap-3 border p-3 rounded-md cursor-pointer flex-1 transition-all ${
              selectedGateway === 'stripe' ? 'border-[#00927c] bg-teal-50/10 shadow-xs' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Radio 
              checked={selectedGateway === 'stripe'} 
              onChange={() => onGatewayChange('stripe')} 
              size="small" 
              sx={{ p: 0, '&.Mui-checked': { color: '#00927c' } }} 
            />
            <span className="font-black text-[#635bff] text-sm tracking-tight leading-none">
              stripe
            </span>
          </div>
        </div>
      </div>

      {/* Bill Card Breakdown */}
      <div className="border border-gray-200 rounded-md p-4 bg-white space-y-4 shadow-2xs">
        {/* Charges List */}
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

        {/* Checkout Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={onCheckout}
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
          CHECKOUT
        </Button>
      </div>

    </div>
  )
}

export default BillCard