import { IconButton, Typography, Radio } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'

export interface AddressType {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

interface AddressCardProps {
  address: AddressType;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

const AddressCard = ({
  address,
  isSelected,
  onSelect,
  onDelete,
}: AddressCardProps) => {
  return (
    <div 
      onClick={onSelect}
      className={`border rounded-md p-4 bg-white relative flex gap-3 cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-[#00927c] ring-2 ring-teal-500/10 shadow-xs' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Selection Radio */}
      <div className="flex items-start pt-0.5">
        <Radio
          checked={isSelected}
          onChange={onSelect}
          size="small"
          sx={{
            p: 0,
            color: '#bdbdbd',
            '&.Mui-checked': {
              color: '#00927c',
            },
          }}
        />
      </div>

      {/* Address Details */}
      <div className="flex-grow space-y-1">
        <Typography className="text-sm font-bold text-gray-800 leading-tight">
          {address.name}
        </Typography>
        <Typography className="text-xs text-gray-500 font-medium leading-normal">
          {address.street}
        </Typography>
        <Typography className="text-xs text-gray-500 font-medium leading-normal">
          {address.city}, {address.state} - <span className="font-bold text-gray-600">{address.pincode}</span>
        </Typography>
        <Typography className="text-[11px] text-gray-400 font-bold pt-1 block">
          MOBILE: {address.phone}
        </Typography>
      </div>

      {/* Delete Action Button */}
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        size="small"
        aria-label="Delete address"
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          color: '#bdbdbd',
          '&:hover': {
            color: '#d32f2f',
            backgroundColor: '#ffebee',
          },
        }}
      >
        <DeleteOutlined fontSize="small" />
      </IconButton>
    </div>
  )
}

export default AddressCard