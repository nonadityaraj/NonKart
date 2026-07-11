import { useState } from "react";
import {
  Search,
  FavoriteBorder,
  ShoppingCartOutlined,
  AccountCircle,
  Menu,
  Close,
} from "@mui/icons-material";
import CategorySheet from "../Components/CategorySheet";
import type { CategoryKey } from "../Components/CategorySheet";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = (category: CategoryKey) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    const id = window.setTimeout(() => {
      setActiveCategory(null);
    }, 150);
    setTimeoutId(id);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Left Side: Logo & Desktop Links */}
        <div className="flex items-center gap-6 lg:gap-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 tracking-tight cursor-pointer">
            NoNKart
          </h1>

          <div className="hidden lg:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
            <a 
              href="#" 
              onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave}
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            >
              Men
            </a>
            <a 
              href="#" 
              onMouseEnter={() => handleMouseEnter('women')}
              onMouseLeave={handleMouseLeave}
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            >
              Women
            </a>
            <a 
              href="#" 
              onMouseEnter={() => handleMouseEnter('home&furniture')}
              onMouseLeave={handleMouseLeave}
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            >
              Home & Furniture
            </a>
            <a 
              href="#" 
              onMouseEnter={() => handleMouseEnter('electronics')}
              onMouseLeave={handleMouseLeave}
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
            >
              Electronics
            </a>
          </div>
        </div>

        {/* Right Side: Desktop Controls */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <Search className="cursor-pointer text-gray-600 hover:text-teal-600 transition-colors" />

          <button className="flex items-center gap-2 bg-teal-600 text-white px-4 lg:px-5 py-2 rounded hover:bg-teal-700 transition font-medium text-sm lg:text-base">
            <AccountCircle />
            LOGIN
          </button>

          <FavoriteBorder className="cursor-pointer text-gray-600 hover:text-red-500 transition-colors" />

          <ShoppingCartOutlined className="cursor-pointer text-gray-600 hover:text-teal-600 transition-colors" />

          <button className="border border-teal-500 text-teal-600 px-4 lg:px-5 py-2 rounded hover:bg-teal-50 transition font-medium text-sm lg:text-base whitespace-nowrap">
            BECOME SELLER
          </button>
        </div>

        {/* Mobile View Icons & Hamburger Menu button */}
        <div className="flex md:hidden items-center gap-4">
          <Search className="cursor-pointer text-gray-600 hover:text-teal-600" />
          <FavoriteBorder className="cursor-pointer text-gray-600 hover:text-red-500" />
          <ShoppingCartOutlined className="cursor-pointer text-gray-600 hover:text-teal-600" />
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-600 hover:text-teal-600 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="text-3xl" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex items-center justify-between border-b pb-4">
          <span className="text-xl font-bold text-teal-600">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 hover:text-red-500 focus:outline-none"
            aria-label="Close menu"
          >
            <Close className="text-2xl" />
          </button>
        </div>

        {/* Navigation links in Mobile Menu */}
        <div className="flex flex-col gap-4 text-lg font-medium border-b pb-6">
          <a 
            href="#" 
            className="text-gray-700 hover:text-teal-600 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Men
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-teal-600 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Women
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-teal-600 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Home & Furniture
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-teal-600 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Electronics
          </a>
        </div>

        {/* Buttons in Mobile Menu */}
        <div className="flex flex-col gap-4 mt-auto">
          <button className="flex items-center justify-center gap-2 bg-teal-600 text-white w-full py-3 rounded hover:bg-teal-700 transition font-semibold">
            <AccountCircle />
            LOGIN
          </button>
          
          <button className="border border-teal-500 text-teal-600 w-full py-3 rounded hover:bg-teal-50 transition font-semibold">
            BECOME SELLER
          </button>
        </div>
      </div>

      {/* Megamenu Category Dropdown Sheet */}
      <CategorySheet
        activeCategory={activeCategory}
        onMouseEnter={() => handleMouseEnter(activeCategory)}
        onMouseLeave={handleMouseLeave}
      />
    </nav>
  );
}