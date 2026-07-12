import { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import AddressCard from './AddressCard'
import type { AddressType } from './AddressCard'
import AddressForm from './AddressForm'
import BillCard from './BillCard'
import { Add } from '@mui/icons-material'

// Standard Initial Address for e-commerce catalog experience
const defaultAddress: AddressType = {
  id: 1,
  name: "Anjali Sharma",
  street: "12A, Phase-3, Suncrest Heights, Sector 62",
  city: "Noida",
  state: "Uttar Pradesh",
  pincode: "201301",
  phone: "9876543210"
}

const Checkout = () => {
  const [addresses, setAddresses] = useState<AddressType[]>([defaultAddress])
  const [selectedAddressId, setSelectedAddressId] = useState<number>(1)
  const [selectedGateway, setSelectedGateway] = useState<'razorpay' | 'stripe'>('razorpay')
  const [isAddingAddress, setIsAddingAddress] = useState(false)

  const handleSaveAddress = (newAddr: Omit<AddressType, 'id'>) => {
    const newAddressObj: AddressType = {
      ...newAddr,
      id: Date.now()
    }
    setAddresses((prev) => [...prev, newAddressObj])
    setSelectedAddressId(newAddressObj.id)
    setIsAddingAddress(false)
  }

  const handleDeleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
    if (selectedAddressId === id && addresses.length > 1) {
      const remaining = addresses.filter((addr) => addr.id !== id)
      setSelectedAddressId(remaining[0].id)
    }
  }

  const handleCheckout = () => {
    const activeAddress = addresses.find((a) => a.id === selectedAddressId)
    if (!activeAddress) {
      alert("Please select or add a delivery address to proceed.")
      return
    }
    alert(`Order placed successfully via ${selectedGateway.toUpperCase()}!\nDelivering to: ${activeAddress.name}, Pincode: ${activeAddress.pincode}`)
  }

  // Cost calculations matching the screen mockup
  const subtotal = 7998
  const discount = 3000
  const shipping = 79
  const total = 4998

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 font-sans antialiased text-gray-800">
      {styleTag}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
     
        <Grid container spacing={4}>
          
         
          <Grid size={{ xs: 12, md: 8 }} className="space-y-6">
            
            {/* Header info */}
            <div className="flex justify-between items-center">
              <div>
                <Typography variant= "h5" className="text-xl font-bold text-gray-850">
                  Select Dilivery Address
                </Typography>
                <Typography  className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">
                  Saved Addreses
                </Typography>
              </div>

              {!isAddingAddress && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setIsAddingAddress(true)}
                  startIcon={<Add />}
                  sx={{
                    borderColor: '#00927c',
                    color: '#00927c',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    '&:hover': {
                      borderColor: '#00796b',
                      backgroundColor: '#eaf5f3',
                    }
                  }}
                >
                  ADD NEW ADDRESS
                </Button>
              )}
            </div>

            {isAddingAddress ? (
              /* Add Address Form */
              <AddressForm 
                onSave={handleSaveAddress} 
                onCancel={() => setIsAddingAddress(false)} 
              />
            ) : (
              /* Address List / Empty State trigger card */
              <div className="space-y-4">
                {addresses.map((address) => (
                  <AddressCard
                    key={address.id}
                    address={address}
                    isSelected={address.id === selectedAddressId}
                    onSelect={() => setSelectedAddressId(address.id)}
                    onDelete={() => handleDeleteAddress(address.id)}
                  />
                ))}

                {/* Big card trigger to add a new address (exactly like screenshot) */}
                <div 
                  onClick={() => setIsAddingAddress(true)}
                  className="border-2 border-dashed border-gray-200 rounded-md p-6 bg-white flex items-center justify-center cursor-pointer hover:border-[#00927c] transition-all duration-200 group hover:shadow-xs"
                >
                  <span className="text-sm font-bold text-[#00927c] group-hover:scale-102 transition-transform">
                    + ADD NEW ADDRESS
                  </span>
                </div>
              </div>
            )}
          </Grid>

          {/* Right Column: Billing breakdown & Payment Gateway */}
          <Grid size={{ xs: 12, md: 4 }}>
            <BillCard
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              total={total}
              selectedGateway={selectedGateway}
              onGatewayChange={setSelectedGateway}
              onCheckout={handleCheckout}
            />
          </Grid>

        </Grid>

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

export default Checkout