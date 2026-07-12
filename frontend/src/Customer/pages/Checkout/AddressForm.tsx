import { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'

interface AddressFormProps {
  onSave: (address: {
    name: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
  }) => void;
  onCancel: () => void;
}

const AddressForm = ({ onSave, onCancel }: AddressFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.street.trim()) newErrors.street = "Address line is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "State is required"
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Enter a valid 6-digit Pincode"
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit mobile number"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSave(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 rounded-md p-5 bg-white space-y-4 font-sans text-gray-800">
      <Typography className="text-sm font-bold text-gray-700 uppercase tracking-wider block mb-2">
        Add New Delivery Address
      </Typography>

      <Grid container spacing={2}>
        {/* Name field */}
        <Grid size={{ xs: 12 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="e.g. Anjali Sharma"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.name && <span className="text-[10px] font-bold text-red-500">{errors.name}</span>}
          </div>
        </Grid>

        {/* Street / Address Line */}
        <Grid size={{ xs: 12 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Flat/House No., Building, Street Area</span>
            <input
              type="text"
              name="street"
              placeholder="e.g. 12A, Sunset Apartments, Mall Road"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.street && <span className="text-[10px] font-bold text-red-500">{errors.street}</span>}
          </div>
        </Grid>

        {/* City & State */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">City</span>
            <input
              type="text"
              name="city"
              placeholder="e.g. New Delhi"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.city && <span className="text-[10px] font-bold text-red-500">{errors.city}</span>}
          </div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">State</span>
            <input
              type="text"
              name="state"
              placeholder="e.g. Delhi"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.state && <span className="text-[10px] font-bold text-red-500">{errors.state}</span>}
          </div>
        </Grid>

        {/* Pincode & Mobile number */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pincode</span>
            <input
              type="text"
              name="pincode"
              maxLength={6}
              placeholder="e.g. 110001"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.pincode && <span className="text-[10px] font-bold text-red-500">{errors.pincode}</span>}
          </div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Mobile Number</span>
            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#00927c]"
            />
            {errors.phone && <span className="text-[10px] font-bold text-red-500">{errors.phone}</span>}
          </div>
        </Grid>
      </Grid>

      {/* Buttons */}
      <div className="flex gap-3 justify-end pt-3">
        <Button
          variant="outlined"
          onClick={onCancel}
          sx={{
            py: 1,
            px: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            borderColor: '#b0bec5',
            color: '#546e7a',
            '&:hover': {
              borderColor: '#90a4ae',
              backgroundColor: '#eceff1',
            }
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            py: 1,
            px: 3,
            textTransform: 'none',
            fontWeight: 'bold',
            backgroundColor: '#00927c',
            '&:hover': {
              backgroundColor: '#00796b',
            }
          }}
        >
          Save Address
        </Button>
      </div>
    </form>
  )
}

export default AddressForm