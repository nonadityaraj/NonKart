import { Typography, IconButton } from '@mui/material'
import { DeleteOutlined, EditOutlined, Add } from '@mui/icons-material'

interface AddressType {
  id: number;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

const addresses: AddressType[] = [
  {
    id: 1,
    label: "HOME",
    name: "Tatiyana",
    street: "42, Green Residency, MG Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    phone: "9876543210",
  },
  {
    id: 2,
    label: "WORK",
    name: "Tatiyana",
    street: "8th Floor, Tech Park One, Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560066",
    phone: "9876543210",
  },
]

const Addressess = () => {
  return (
    <div className="font-sans">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Typography className="text-lg font-bold text-gray-800">Manage Addresses</Typography>
          <Typography className="text-xs text-gray-400 font-medium">
            {addresses.length} saved {addresses.length === 1 ? 'address' : 'addresses'}
          </Typography>
        </div>
        <button className="flex items-center gap-1 border border-[#00927c] text-[#00927c] px-4 py-2 rounded hover:bg-teal-50 transition font-medium text-sm">
          <Add fontSize="small" />
          Add New
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border border-gray-200 rounded-md bg-white p-4 relative"
          >
            <span className="inline-block text-[10px] font-bold text-[#00927c] bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wider mb-2">
              {address.label}
            </span>

            <Typography className="text-sm font-bold text-gray-800">
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

            <div className="absolute top-3 right-3 flex gap-1">
              <IconButton
                size="small"
                aria-label="Edit address"
                sx={{ color: '#00927c', '&:hover': { backgroundColor: '#eaf5f3' } }}
              >
                <EditOutlined fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                aria-label="Delete address"
                sx={{ color: '#bdbdbd', '&:hover': { color: '#d32f2f', backgroundColor: '#ffebee' } }}
              >
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Addressess
