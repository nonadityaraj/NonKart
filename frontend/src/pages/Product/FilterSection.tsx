import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Divider,
  Box,
} from '@mui/material'
import ClearAllIcon from '@mui/icons-material/ClearAll';

import { colors } from '../../data/filter/colours';
import { priceRanges } from '../../data/filter/prices';
import { discountOptions } from '../../data/filter/discounts';

interface FilterSectionProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  selectedPrice: string;
  onPriceChange: (priceRange: string) => void;
  selectedDiscount: string;
  onDiscountChange: (discount: string) => void;
  onClearFilters: () => void;
}

const FilterSection = ({
  selectedColor,
  onColorChange,
  selectedPrice,
  onPriceChange,
  selectedDiscount,
  onDiscountChange,
  onClearFilters,
}: FilterSectionProps) => {
  const [showAllColors, setShowAllColors] = useState(false);
  const visibleColors = showAllColors ? colors : colors.slice(0, 8);

  return (
    <Box className="p-5 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Typography variant="h6" className="font-bold text-gray-800">
          Filters
        </Typography>
        <Button
          variant="text"
          color="primary"
          size="small"
          startIcon={<ClearAllIcon />}
          onClick={onClearFilters}
          sx={{ fontWeight: 'bold' }}
        >
          Clear All
        </Button>
      </div>

      <Divider />

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
          Color
        </FormLabel>
        <RadioGroup
          aria-label="color"
          name="color"
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
        >
          {visibleColors.map((colorOption) => (
            <FormControlLabel 
              key={colorOption.value}
              value={colorOption.value} 
              control={<Radio size="small" />} 
              label={
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-3.5 h-3.5 rounded-full border border-gray-300 ${colorOption.class}`} />
                  <span className="text-sm font-medium text-gray-700">{colorOption.name}</span>
                </div>
              } 
            />
          ))}
          {colors.length > 8 && (
            <Button
              variant="text"
              size="small"
              onClick={() => setShowAllColors(!showAllColors)}
              sx={{ 
                textTransform: 'none', 
                fontWeight: 'bold', 
                mt: 1, 
                alignSelf: 'flex-start',
                color: '#00927c',
                '&:hover': {
                  backgroundColor: '#eaf5f3'
                }
              }}
            >
              {showAllColors ? "Show Less" : `Show More (+${colors.length - 8})`}
            </Button>
          )}
        </RadioGroup>
      </FormControl>

      <Divider />

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
          Price Range
        </FormLabel>
        <RadioGroup
          aria-label="price"
          name="price"
          value={selectedPrice}
          onChange={(e) => onPriceChange(e.target.value)}
        >
          {priceRanges.map((priceOption) => (
            <FormControlLabel 
              key={priceOption.value}
              value={priceOption.value} 
              control={<Radio size="small" />} 
              label={<span className="text-sm font-medium text-gray-700">{priceOption.name}</span>} 
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Divider />

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 1 }}>
          Discounts
        </FormLabel>
        <RadioGroup
          aria-label="discount"
          name="discount"
          value={selectedDiscount}
          onChange={(e) => onDiscountChange(e.target.value)}
        >
          {discountOptions.map((discountOption) => (
            <FormControlLabel 
              key={discountOption.value}
              value={discountOption.value} 
              control={<Radio size="small" />} 
              label={<span className="text-sm font-medium text-gray-700">{discountOption.name}</span>} 
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default FilterSection