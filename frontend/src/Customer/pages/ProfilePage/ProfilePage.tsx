import { useState } from 'react'
import { Typography } from '@mui/material'
import {
  ShoppingBagOutlined,
  PersonOutlined,
  FavoriteBorder,
  LocationOnOutlined,
  LogoutOutlined,
  LockOutlined,
} from '@mui/icons-material'
import Profile from './Profile'
import type { UserDetails } from './Profile'
import Orders from './Orders'
import Wishlists from './Wishlists'
import Addressess from './Addressess'

type TabKey = 'orders' | 'profile' | 'wishlist' | 'addresses'

// Mock signed-in user (replace with real auth data later)
const user: UserDetails = {
  name: 'Tatiyana',
  email: 'tatiyana@example.com',
  phone: '9876543210',
  gender: 'Female',
  dob: '14 Feb 1998',
}

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'orders', label: 'Orders', icon: <ShoppingBagOutlined fontSize="small" /> },
  { key: 'profile', label: 'Profile', icon: <PersonOutlined fontSize="small" /> },
  { key: 'wishlist', label: 'Wishlists', icon: <FavoriteBorder fontSize="small" /> },
  { key: 'addresses', label: 'Addresses', icon: <LocationOnOutlined fontSize="small" /> },
]

const ProfilePage = () => {
  // Gate the page: user must be logged in to view it.
  const [isLogged, setIsLogged] = useState(true)
  const [activeTab, setActiveTab] = useState<TabKey>('orders')

  // Guard: block the page for logged-out users
  if (!isLogged) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 font-sans">
        <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-[#00927c] mb-4">
          <LockOutlined />
        </div>
        <Typography className="text-lg font-bold text-gray-800">
          Please log in to continue
        </Typography>
        <Typography className="text-sm text-gray-400 font-medium mt-1 mb-5">
          You need to be signed in to view your profile.
        </Typography>
        <button
          onClick={() => setIsLogged(true)}
          className="bg-[#00927c] text-white px-6 py-2 rounded hover:bg-teal-700 transition font-medium text-sm"
        >
          Login
        </button>
      </div>
    )
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile user={user} />
      case 'wishlist':
        return <Wishlists />
      case 'addresses':
        return <Addressess />
      case 'orders':
      default:
        return <Orders />
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 font-sans">
      {/* Header */}
      {/* <div className="border-b border-gray-200 pb-4 mb-6">
        <Typography className="text-2xl font-bold text-gray-800">{user.name}</Typography>
      </div> */}

      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="border border-gray-200 rounded-md overflow-hidden bg-white">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-sm font-semibold border-b border-gray-100 transition-colors ${
                    isActive
                      ? 'bg-[#00927c] text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#00927c]'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              )
            })}

            {/* Logout */}
            <button
              onClick={() => setIsLogged(false)}
              className="w-full flex items-center gap-3 px-5 py-4 text-sm font-semibold text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <LogoutOutlined fontSize="small" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Content */}
        <section className="flex-grow min-w-0">{renderTab()}</section>
      </div>
    </div>
  )
}

export default ProfilePage
