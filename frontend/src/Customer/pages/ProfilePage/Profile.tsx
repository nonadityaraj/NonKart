import { Typography } from '@mui/material'

export interface UserDetails {
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
}

interface ProfileProps {
  user: UserDetails;
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1 border-b border-gray-100 py-4">
    <Typography className="text-[11px] uppercase tracking-wider font-bold text-gray-400">
      {label}
    </Typography>
    <Typography className="text-sm font-semibold text-gray-800">
      {value}
    </Typography>
  </div>
)

const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="font-sans">
      <div className="mb-6">
        <Typography className="text-lg font-bold text-gray-800">
          Personal Information
        </Typography>
        <Typography className="text-xs text-gray-400 font-medium">
          Manage your personal details
        </Typography>
      </div>

      <div className="border border-gray-200 rounded-md bg-white p-6">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
          <img
            src="https://i.pravatar.cc/100?img=47"
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
          />
          <div>
            <Typography className="text-base font-bold text-gray-800">
              {user.name}
            </Typography>
            <Typography className="text-xs text-gray-400 font-medium">
              {user.email}
            </Typography>
          </div>
        </div>

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-x-8">
          <Row label="Full Name" value={user.name} />
          <Row label="Email Address" value={user.email} />
          <Row label="Mobile Number" value={user.phone} />
          <Row label="Gender" value={user.gender} />
          <Row label="Date of Birth" value={user.dob} />
        </div>

        <button className="mt-6 bg-[#00927c] text-white px-6 py-2 rounded hover:bg-teal-700 transition font-medium text-sm">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default Profile
