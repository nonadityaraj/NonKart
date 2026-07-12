import { useState } from 'react'
import { Typography } from '@mui/material'
import { Bolt, ChevronRight } from '@mui/icons-material'
import OrderDetails from './OrderDetails'
import type { OrderType, OrderAddress } from './OrderDetails'

// Delivery address for the orders (passed as a prop to OrderDetails)
const address: OrderAddress = {
  name: "Tatiyana",
  street: "42, Green Residency, MG Road",
  city: "Bengaluru",
  state: "Karnataka",
  pincode: "560001",
  phone: "9876543210",
}

const initialOrders: OrderType[] = [
  {
    id: 1,
    status: "PLACED",
    arriving: "Arriving by Sun, Feb 02",
    title: "Pink Floral Patterned Saree",
    brand: "Zosh Ethnic",
    size: "FREE",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&q=60",
    price: 1299,
    originalPrice: 2999,
    quantity: 1,
    step: 0,
    timeline: ["Fri, Jan 31", "Expected Feb 01", "Expected Feb 02", "Expected Feb 02"],
  },
  {
    id: 2,
    status: "DELIVERED",
    arriving: "Delivered on Mon, Jan 20",
    title: "Men Slim Fit Casual Shirt",
    brand: "Roadster",
    size: "M",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&q=60",
    price: 799,
    originalPrice: 1999,
    quantity: 2,
    step: 3,
    timeline: ["Thu, Jan 16", "Fri, Jan 17", "Mon, Jan 20", "Mon, Jan 20"],
  },
  {
    id: 3,
    status: "SHIPPED",
    arriving: "Arriving by Wed, Feb 05",
    title: "Wireless Bluetooth Headphones",
    brand: "boAt",
    size: "FREE",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=60",
    price: 1499,
    originalPrice: 3999,
    quantity: 1,
    step: 1,
    timeline: ["Sun, Feb 02", "Mon, Feb 03", "Expected Feb 05", "Expected Feb 05"],
  },
]

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>(initialOrders)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const selectedOrder = orders.find((o) => o.id === selectedId) || null

  const cancelOrder = (id: number) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: 'CANCELLED', arriving: 'Order Cancelled' } : o
      )
    )
  }

  // Detail view
  if (selectedOrder) {
    return (
      <OrderDetails
        order={selectedOrder}
        address={address}
        onBack={() => setSelectedId(null)}
        onCancel={() => cancelOrder(selectedOrder.id)}
      />
    )
  }

  // List view
  return (
    <div className="font-sans">
      <div className="mb-6">
        <Typography className="text-lg font-bold text-gray-800">All orders</Typography>
        <Typography className="text-xs text-gray-400 font-medium">from anytime</Typography>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            onClick={() => setSelectedId(order.id)}
            className="border border-gray-200 rounded-md bg-white p-5 cursor-pointer hover:border-[#00927c] hover:shadow-sm transition-all relative"
          >
            {/* Status header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                  order.status === 'CANCELLED' ? 'bg-red-400' : 'bg-[#00927c]'
                }`}
              >
                <Bolt fontSize="small" />
              </div>
              <div>
                <Typography
                  className={`text-sm font-bold ${
                    order.status === 'CANCELLED' ? 'text-red-500' : 'text-[#00927c]'
                  }`}
                >
                  {order.status}
                </Typography>
                <Typography className="text-xs text-gray-500 font-medium">
                  {order.arriving}
                </Typography>
              </div>
            </div>

            {/* Chevron */}
            <ChevronRight
              className="text-gray-300 absolute top-5 right-4"
              fontSize="small"
            />

            {/* Product */}
            <div className="flex gap-4 items-center bg-teal-50/40 rounded-md p-3">
              <div className="w-16 h-20 rounded overflow-hidden border border-gray-100 flex-shrink-0">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <Typography className="text-sm font-semibold text-gray-800">
                  {order.title}
                </Typography>
                <Typography className="text-xs text-gray-500 font-medium">
                  <span className="font-bold text-gray-700">size</span> : {order.size}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
