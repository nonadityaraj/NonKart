import { useState } from 'react'
import { Typography, IconButton } from '@mui/material'
import { Favorite } from '@mui/icons-material'

interface WishlistItem {
  id: number;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
}

const initialWishlist: WishlistItem[] = [
  {
    id: 1,
    title: "Pink Floral Patterned Saree",
    brand: "Zosh Ethnic",
    price: 1299,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=60",
  },
  {
    id: 2,
    title: "Men Slim Fit Casual Shirt",
    brand: "Roadster",
    price: 799,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&q=60",
  },
  {
    id: 3,
    title: "Wireless Bluetooth Headphones",
    brand: "boAt",
    price: 1499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=60",
  },
  {
    id: 4,
    title: "Analog Leather Wrist Watch",
    brand: "Fossil",
    price: 3499,
    originalPrice: 6999,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&q=60",
  },
]

const Wishlists = () => {
  const [items, setItems] = useState<WishlistItem[]>(initialWishlist)

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="font-sans">
      <div className="mb-6">
        <Typography className="text-lg font-bold text-gray-800">My Wishlist</Typography>
        <Typography className="text-xs text-gray-400 font-medium">
          {items.length} liked {items.length === 1 ? 'item' : 'items'}
        </Typography>
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-md p-10 text-center">
          <Typography className="text-sm text-gray-400 font-medium">
            Your wishlist is empty.
          </Typography>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-md bg-white overflow-hidden relative group"
            >
              <IconButton
                onClick={() => removeItem(item.id)}
                size="small"
                aria-label="Remove from wishlist"
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'white',
                  color: '#e53935',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                  '&:hover': { backgroundColor: '#ffebee' },
                }}
              >
                <Favorite fontSize="small" />
              </IconButton>

              <div className="h-40 overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-3 space-y-1">
                <Typography className="text-[11px] text-gray-400 font-bold uppercase">
                  {item.brand}
                </Typography>
                <Typography className="text-sm font-semibold text-gray-800 leading-tight line-clamp-1">
                  {item.title}
                </Typography>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-sm font-bold text-gray-800">₹{item.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlists
