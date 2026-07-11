import { IconButton, Typography } from '@mui/material'
import { Close, Add, Remove } from '@mui/icons-material'

export interface CartItemType {
  id: number;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  replacementDays: number;
}

interface CartItemProps {
  item: CartItemType;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const Cartitem = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="border border-gray-200 rounded-md bg-white flex flex-col font-sans">
      {/* Top Section */}
      <div className="p-4 flex gap-4 relative">
        {/* Product Image */}
        <div className="w-20 h-24 sm:w-24 sm:h-28 border border-gray-100 rounded overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Product Metadata */}
        <div className="flex-grow pr-6 space-y-1">
          <Typography className="text-sm font-semibold text-gray-800 leading-tight">
            {item.title}
          </Typography>
          <Typography className="text-[11px] text-gray-400 font-medium">
            Sold by: {item.brand}
          </Typography>
          <Typography className="text-[11px] text-gray-500 font-semibold">
            {item.replacementDays} days replacement available
          </Typography>
          <Typography className="text-[11px] text-gray-500 font-semibold block">
            quantity : {item.quantity}
          </Typography>
        </div>

        {/* Remove Button */}
        <IconButton 
          onClick={onRemove}
          size="small"
          aria-label="Remove item"
          sx={{ 
            position: 'absolute', 
            top: 12, 
            right: 12, 
            color: '#00927c',
            '&:hover': {
              backgroundColor: '#eaf5f3'
            }
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Bottom Section */}
      <div className="px-4 py-3 flex items-center justify-between bg-gray-50/20">
        {/* Quantity Controls */}
        <div className="flex items-center gap-5">
          <button 
            onClick={onDecrement}
            disabled={item.quantity === 1}
            className="text-[#00927c] text-lg font-bold hover:scale-110 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-transform"
            aria-label="Decrease quantity"
          >
            <Remove fontSize="small" />
          </button>
          
          <span className="text-sm font-bold text-gray-800 w-4 text-center">
            {item.quantity}
          </span>
          
          <button 
            onClick={onIncrement}
            className="text-[#00927c] text-lg font-bold hover:scale-110 active:scale-95 transition-transform"
            aria-label="Increase quantity"
          >
            <Add fontSize="small" />
          </button>
        </div>

        {/* Total Item Price */}
        <Typography className="text-sm font-bold text-gray-800">
          ₹{item.price * item.quantity}
        </Typography>
      </div>
    </div>
  )
}

export default Cartitem