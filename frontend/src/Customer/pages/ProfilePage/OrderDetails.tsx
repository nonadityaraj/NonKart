import { Typography } from '@mui/material'
import {
  ArrowBack,
  CheckCircle,
  LocationOnOutlined,
  Cancel as CancelIcon,
} from '@mui/icons-material'

export interface OrderAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface OrderType {
  id: number;
  status: string;         // PLACED | SHIPPED | OUT_FOR_DELIVERY | DELIVERED | CANCELLED
  arriving: string;
  title: string;
  brand: string;
  size: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity: number;
  step: number;           // 0..3 -> current tracking stage
  timeline: string[];     // date/label for each of the 4 stages
}

interface OrderDetailsProps {
  order: OrderType;
  address: OrderAddress;
  onBack: () => void;
  onCancel: () => void;
}

const STEPS = ['Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered']

const OrderDetails = ({ order, address, onBack, onCancel }: OrderDetailsProps) => {
  const isCancelled = order.status === 'CANCELLED'
  const isDelivered = order.status === 'DELIVERED'
  const discount = order.originalPrice - order.price
  const total = order.price * order.quantity

  return (
    <div className="font-sans">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#00927c] transition-colors mb-5"
      >
        <ArrowBack fontSize="small" />
        Back to orders
      </button>

      {/* Product summary */}
      <div className="border border-gray-200 rounded-md bg-white p-5 flex gap-4">
        <div className="w-24 h-28 rounded overflow-hidden border border-gray-100 flex-shrink-0">
          <img
            src={order.image}
            alt={order.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-grow space-y-1">
          <Typography className="text-[11px] text-gray-400 font-bold uppercase">
            {order.brand}
          </Typography>
          <Typography className="text-base font-semibold text-gray-800 leading-tight">
            {order.title}
          </Typography>
          <Typography className="text-xs text-gray-500 font-medium">
            <span className="font-bold text-gray-700">Size</span> : {order.size} &nbsp;·&nbsp;
            <span className="font-bold text-gray-700">Qty</span> : {order.quantity}
          </Typography>
          <Typography
            className={`text-xs font-bold pt-1 inline-block ${
              isCancelled ? 'text-red-500' : 'text-[#00927c]'
            }`}
          >
            {isCancelled ? 'Order Cancelled' : order.arriving}
          </Typography>
        </div>
      </div>

      {/* Tracking timeline (Flipkart style) */}
      <div className="border border-gray-200 rounded-md bg-white p-5 mt-4">
        <Typography className="text-sm font-bold text-gray-800 mb-5">
          Order Tracking
        </Typography>

        {isCancelled ? (
          <div className="flex items-center gap-3 bg-red-50 rounded-md p-4">
            <CancelIcon className="text-red-500" fontSize="small" />
            <div>
              <Typography className="text-sm font-semibold text-red-600">
                This order was cancelled
              </Typography>
              <Typography className="text-xs text-gray-500 font-medium">
                Any amount paid will be refunded to the original payment method.
              </Typography>
            </div>
          </div>
        ) : (
          <div>
            {STEPS.map((label, idx) => {
              const done = idx <= order.step
              const isCurrent = idx === order.step
              const isLast = idx === STEPS.length - 1
              return (
                <div key={label} className="flex gap-4">
                  {/* Dot + connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
                        done
                          ? 'bg-[#00927c] border-[#00927c] text-white'
                          : 'bg-white border-gray-300 text-transparent'
                      } ${isCurrent ? 'ring-4 ring-teal-500/15' : ''}`}
                    >
                      <CheckCircle sx={{ fontSize: 14 }} />
                    </div>
                    {!isLast && (
                      <div
                        className={`w-0.5 flex-grow my-1 ${
                          idx < order.step ? 'bg-[#00927c]' : 'bg-gray-200'
                        }`}
                        style={{ minHeight: 36 }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className={`pb-6 ${isLast ? 'pb-0' : ''}`}>
                    <Typography
                      className={`text-sm font-semibold ${
                        done ? 'text-gray-800' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </Typography>
                    <Typography className="text-xs text-gray-400 font-medium">
                      {order.timeline[idx] || (done ? 'Completed' : 'Pending')}
                    </Typography>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Delivery address */}
      <div className="border border-gray-200 rounded-md bg-white p-5 mt-4">
        <div className="flex items-center gap-2 mb-3">
          <LocationOnOutlined className="text-[#00927c]" fontSize="small" />
          <Typography className="text-sm font-bold text-gray-800">
            Delivery Address
          </Typography>
        </div>
        <Typography className="text-sm font-semibold text-gray-800">
          {address.name}
        </Typography>
        <Typography className="text-xs text-gray-500 font-medium leading-normal mt-1">
          {address.street}
        </Typography>
        <Typography className="text-xs text-gray-500 font-medium leading-normal">
          {address.city}, {address.state} -{' '}
          <span className="font-bold text-gray-600">{address.pincode}</span>
        </Typography>
        <Typography className="text-[11px] text-gray-400 font-bold pt-2 block">
          MOBILE: {address.phone}
        </Typography>
      </div>

      {/* Price details */}
      <div className="border border-gray-200 rounded-md bg-white p-5 mt-4">
        <Typography className="text-sm font-bold text-gray-800 mb-3">
          Price Details
        </Typography>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">
              Price ({order.quantity} item{order.quantity > 1 ? 's' : ''})
            </span>
            <span className="text-gray-700 font-medium">
              ₹{order.originalPrice * order.quantity}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">Discount</span>
            <span className="text-[#00927c] font-medium">
              − ₹{discount * order.quantity}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 font-medium">Delivery Charges</span>
            <span className="text-[#00927c] font-medium">FREE</span>
          </div>
          <div className="border-t border-gray-100 pt-2 flex justify-between">
            <span className="text-sm font-bold text-gray-800">Total Amount</span>
            <span className="text-sm font-bold text-gray-800">₹{total}</span>
          </div>
        </div>
      </div>

      {/* Cancel order */}
      <div className="mt-5">
        <button
          onClick={onCancel}
          disabled={isDelivered || isCancelled}
          className="w-full sm:w-auto border border-red-400 text-red-500 px-6 py-2.5 rounded font-medium text-sm hover:bg-red-50 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
        >
          {isCancelled ? 'Order Cancelled' : 'Cancel Order'}
        </button>
        {isDelivered && (
          <Typography className="text-[11px] text-gray-400 font-medium mt-2">
            Delivered orders cannot be cancelled.
          </Typography>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
