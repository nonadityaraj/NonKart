import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 border-t border-gray-800 font-sans">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        {/* <div className="space-y-4">
          <Typography className="text-xl font-bold text-white tracking-tight">
            NoN<span className="text-teal-400">Kart</span>
          </Typography>
          <Typography className="text-xs text-gray-400 leading-relaxed">
            Your destination for premium sarees, designer clothing, home decor, and electronics. Offering you a seamless shopping experience with top-tier customer support.
          </Typography>
        </div> */}

        {/* Shop Links */}
        {/* <div>
          <Typography className="text-xs font-bold text-white uppercase tracking-widest block mb-4">
            Shop
          </Typography>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Men</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Women</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Home & Furniture</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Electronics</a></li>
          </ul>
        </div> */}

        {/* Policy Links */}
        {/* <div>
          <Typography className="text-xs font-bold text-white uppercase tracking-widest block mb-4">
            Policy
          </Typography>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-[#00927c] transition-colors">7 Days Replacement</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Shipping & Returns</a></li>
          </ul>
        </div> */}

        {/* Contact info */}
        {/* <div>
          <Typography className="text-xs font-bold text-white uppercase tracking-widest block mb-4">
            Contact Us
          </Typography>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li>
              <span className="font-semibold text-white block">Email:</span>
              support@nonkart.com
            </li>
            <li>
              <span className="font-semibold text-white block">Helpline:</span>
              +91 1800-123-4567
            </li>
          </ul>
        </div> */}

      </div>

      {/* Divider */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 border-t border-gray-800" /> */}

      {/* Bottom Footer Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <Typography className="text-[11px]">
          &copy; {new Date().getFullYear()} NoNKart. All rights reserved.
        </Typography>
        

      </div>
    </footer>
  )
}

export default Footer
