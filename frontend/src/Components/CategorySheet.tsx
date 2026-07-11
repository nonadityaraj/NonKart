import menSubCategories from '../data/subcategory/men'
import womenSubCategories from '../data/subcategory/women'
import electronicsSubCategories from '../data/subcategory/electronics'
import homeAndFurnitureSubCategories from '../data/subcategory/home&furniture'
import { Typography } from '@mui/material'

export type CategoryKey = 'men' | 'women' | 'electronics' | 'home&furniture' | null;

interface CategorySheetProps {
  activeCategory: CategoryKey;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CategorySheet = ({
  activeCategory,
  onMouseEnter,
  onMouseLeave,
}: CategorySheetProps) => {
  if (!activeCategory) return null;

  // Select appropriate data based on activeCategory
  let subCategories = menSubCategories;
  if (activeCategory === 'women') {
    subCategories = womenSubCategories;
  } else if (activeCategory === 'electronics') {
    subCategories = electronicsSubCategories;
  } else if (activeCategory === 'home&furniture') {
    subCategories = homeAndFurnitureSubCategories;
  }

  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-gray-150 z-50 transition-all duration-300 origin-top animate-fade-in font-sans max-h-[480px] overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-5">
        {subCategories.map((sub, index) => {
          const isFirstCol = index === 0;
          return (
            <div 
              key={index} 
              className={`p-6 space-y-4 border-r border-gray-100 last:border-r-0 min-h-[380px] ${
                isFirstCol ? 'bg-gray-50/70' : 'bg-white'
              }`}
            >
              {/* Category Subheader in Teal Green */}
              <Typography className="text-xs font-bold text-[#00927c] uppercase tracking-wider block border-b border-gray-100 pb-2">
                {sub.title}
              </Typography>
              
              {/* Category Link Items */}
              <ul className="space-y-1.5">
                {sub.items.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-[11px] text-gray-650 hover:text-teal-600 transition-colors block py-0.5 font-semibold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default CategorySheet
