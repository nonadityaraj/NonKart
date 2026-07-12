import { useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  Button, 
  Drawer, 
  IconButton,
  Pagination
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import CloseIcon from '@mui/icons-material/Close'

interface ProductItem {
    id: number;
    title: string;
    brand: string;
    price: number;
    originalPrice: number;
    discount: number;
    color: string;
    category: string;
    images: string[];
}

const products: ProductItem[] = [
  {
    id: 1,
    title: "Embellished Georgette Designer Saree",
    brand: "Laxmipati",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    color: "Pink",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/f/6/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhzjxru2ne.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/v/g/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhn2fph2hz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/r/f/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhthh6tzgf.jpeg?q=70"
    ]
  },
  {
    id: 2,
    title: "Solid Men Round Neck Black T-Shirt",
    brand: "Nike",
    price: 499,
    originalPrice: 999,
    discount: 50,
    color: "Black",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/t/d/s-ts135-vebnor-original-imahng6ndzph2dhm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/b/d/s-ts135-vebnor-original-imahng6nyf76h2gf.jpeg?q=70"
    ]
  },
  {
    id: 3,
    title: "Woven Kanjivaram Silk Blend Saree",
    brand: "Mimosa",
    price: 1899,
    originalPrice: 3999,
    discount: 52,
    color: "Red",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/u/g/free-2425s307-mimosa-unstitched-original-imahfnydfbypyfyx.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/y/b/w/free-2425s307-mimosa-unstitched-original-imahfnydgnf9hff7.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/p/c/c/free-2425s307-mimosa-unstitched-original-imahfnydgbdfqzzg.jpeg?q=70"
    ]
  },
  {
    id: 4,
    title: "Men Slim Fit Printed Blue T-Shirt",
    brand: "Puma",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    color: "Blue",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/w/i/s-men-s-printed-round-neck-slim-fit-cotton-t-shirt-clothing-set-original-imahfhhfzwbhhzfg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/e/k/s-men-s-printed-round-neck-slim-fit-cotton-t-shirt-clothing-set-original-imahfhhfvshx7zxz.jpeg?q=70"
    ]
  },
  {
    id: 5,
    title: "Embroidered Banarasi Silk Saree",
    brand: "Varkala Silk",
    price: 2499,
    originalPrice: 5999,
    discount: 58,
    color: "Green",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/k/w/free-k-05-varkala-silk-sarees-unstitched-original-imahye6jzkdzfyhz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/v/m/n/free-k-05-varkala-silk-sarees-unstitched-original-imahye6jgfhdfhhz.jpeg?q=70"
    ]
  },
  {
    id: 6,
    title: "Casual Striped Green T-Shirt",
    brand: "Adidas",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    color: "Green",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/p/v/s-striped-men-round-neck-green-t-shirt-original-imah2ffhzdbyhyhh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/h/q/s-striped-men-round-neck-green-t-shirt-original-imah2ffhzffhdhzg.jpeg?q=70"
    ]
  },
  {
    id: 7,
    title: "Floral Print Chiffon Saree",
    brand: "Laxmipati",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    color: "Yellow",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/b/v/w/free-floral-laxmipati-unstitched-original-imah4hjyzhhfzfgz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/z/n/free-floral-laxmipati-unstitched-original-imah4hjyzshfshzh.jpeg?q=70"
    ]
  },
  {
    id: 8,
    title: "Solid Cotton Crew Neck Red T-Shirt",
    brand: "Levis",
    price: 399,
    originalPrice: 799,
    discount: 50,
    color: "Red",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/d/y/s-solid-men-crew-neck-red-t-shirt-original-imah33hgzjhfzhzh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/t/a/s-solid-men-crew-neck-red-t-shirt-original-imah33hgzzhdzgzh.jpeg?q=70"
    ]
  },
  {
    id: 9,
    title: "Woven Banarasi Cotton Saree",
    brand: "Mimosa",
    price: 1100,
    originalPrice: 2200,
    discount: 50,
    color: "Orange",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/b/v/w/free-floral-laxmipati-unstitched-original-imah4hjyzhhfzfgz.jpeg?q=70"
    ]
  },
  {
    id: 10,
    title: "Slim Fit Solid Crew Neck Purple T-Shirt",
    brand: "Nike",
    price: 250,
    originalPrice: 500,
    discount: 50,
    color: "Purple",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70"
    ]
  },
  {
    id: 11,
    title: "Heavy Silk Kanjivaram Designer Saree",
    brand: "Varkala Silk",
    price: 3200,
    originalPrice: 8000,
    discount: 60,
    color: "Gray",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/k/w/free-k-05-varkala-silk-sarees-unstitched-original-imahye6jzkdzfyhz.jpeg?q=70"
    ]
  },
  {
    id: 12,
    title: "Sporty Solid Crew Neck White T-Shirt",
    brand: "Puma",
    price: 750,
    originalPrice: 1500,
    discount: 50,
    color: "White",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/w/i/s-men-s-printed-round-neck-slim-fit-cotton-t-shirt-clothing-set-original-imahfhhfzwbhhzfg.jpeg?q=70"
    ]
  },
  {
    id: 13,
    title: "Navy Silk Blend Traditional Saree",
    brand: "Mimosa",
    price: 1450,
    originalPrice: 2900,
    discount: 50,
    color: "Navy",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/u/g/free-2425s307-mimosa-unstitched-original-imahfnydfbypyfyx.jpeg?q=70"
    ]
  },
  {
    id: 14,
    title: "Men Slim Fit Cotton Brown T-Shirt",
    brand: "Levis",
    price: 550,
    originalPrice: 1100,
    discount: 50,
    color: "Brown",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/d/y/s-solid-men-crew-neck-red-t-shirt-original-imah33hgzjhfzhzh.jpeg?q=70"
    ]
  },
  {
    id: 15,
    title: "Floral Printed Chiffon Saree",
    brand: "Laxmipati",
    price: 2800,
    originalPrice: 7000,
    discount: 60,
    color: "Peach",
    category: "Saree",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/r/f/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhthh6tzgf.jpeg?q=70"
    ]
  },
  {
    id: 16,
    title: "Ultralight Comfort Crew Neck Teal T-Shirt",
    brand: "Adidas",
    price: 199,
    originalPrice: 799,
    discount: 75,
    color: "Teal",
    category: "T-Shirt",
    images: [
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/p/v/s-striped-men-round-neck-green-t-shirt-original-imah2ffhzdbyhyhh.jpeg?q=70"
    ]
  }
];

const Product = () => {
    const [sort, setSort] = useState('price_low')
    const [selectedColor, setSelectedColor] = useState('all')
    const [selectedPrice, setSelectedPrice] = useState('all')
    const [selectedDiscount, setSelectedDiscount] = useState('all')
    const [page, setPage] = useState(1)
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

    const ITEMS_PER_PAGE = 6

    const handleSort = (e: any) => {
        setSort(e.target.value)
        setPage(1)
    }

    const handleClearFilters = () => {
        setSelectedColor('all')
        setSelectedPrice('all')
        setSelectedDiscount('all')
        setPage(1)
    }

    // Apply color, price, and discount filters
    const filteredProducts = products.filter((product) => {
        // Color filter
        const matchColor = selectedColor === 'all' || product.color === selectedColor;

        // Price filter
        let matchPrice = true;
        if (selectedPrice === 'under_500') {
            matchPrice = product.price < 500;
        } else if (selectedPrice === '500_1000') {
            matchPrice = product.price >= 500 && product.price <= 1000;
        } else if (selectedPrice === '1000_2000') {
            matchPrice = product.price >= 1000 && product.price <= 2000;
        } else if (selectedPrice === '2000_5000') {
            matchPrice = product.price >= 2000 && product.price <= 5000;
        } else if (selectedPrice === '5000_10000') {
            matchPrice = product.price >= 5000 && product.price <= 10000;
        } else if (selectedPrice === '10000_15000') {
            matchPrice = product.price >= 10000 && product.price <= 15000;
        } else if (selectedPrice === '15000_20000') {
            matchPrice = product.price >= 15000 && product.price <= 20000;
        } else if (selectedPrice === 'over_20000') {
            matchPrice = product.price > 20000;
        }

        // Discount filter
        let matchDiscount = true;
        if (selectedDiscount !== 'all') {
            matchDiscount = product.discount >= Number(selectedDiscount);
        }

        return matchColor && matchPrice && matchDiscount;
    }).sort((a, b) => {
        // Sorting logic
        if (sort === 'price_low') {
            return a.price - b.price;
        } else if (sort === 'price_high') {
            return b.price - a.price;
        }
        return 0;
    });

    // Paginate products
    const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-16'>
            <div className="mb-6">
                <h1 className='text-3xl font-extrabold text-gray-500 text-center pb-2 border-b border-gray-100 uppercase tracking-tight'>
                    Women Saree
                </h1>
            </div>

            <div className='flex gap-8 relative'>
                {/* Left Sidebar (Desktop Only) */}
                <section className='border border-gray-100 rounded-xl bg-white hidden lg:block w-[25%] h-fit sticky top-[100px] shadow-sm' >
                    <FilterSection 
                        selectedColor={selectedColor}
                        onColorChange={(val: string) => { setSelectedColor(val); setPage(1); }}
                        selectedPrice={selectedPrice}
                        onPriceChange={(val: string) => { setSelectedPrice(val); setPage(1); }}
                        selectedDiscount={selectedDiscount}
                        onDiscountChange={(val: string) => { setSelectedDiscount(val); setPage(1); }}
                        onClearFilters={handleClearFilters}
                    />
                </section>

                {/* Right Product Grid Section */}
                <section className='w-full lg:w-[75%] space-y-6'>
                    <div className='flex justify-between items-center h-[56px] bg-gray-50/50 px-4 rounded-xl border border-gray-100'>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-gray-500">
                                {filteredProducts.length} Products Found
                            </span>
                            
                            {/* Mobile Filters Toggle Button */}
                            <Button 
                                variant="outlined" 
                                color="primary"
                                size="small"
                                startIcon={<FilterListIcon />} 
                                onClick={() => setIsMobileFilterOpen(true)}
                                sx={{ display: { lg: 'none' }, fontWeight: 'bold' }}
                            >
                                Filters
                            </Button>
                        </div>

                        <FormControl size="small" sx={{ minWidth: 150 }}>
                            <InputLabel id="sort-select-label">Sort By</InputLabel>
                            <Select
                                labelId="sort-select-label"
                                id="sort-select"
                                value={sort}
                                label="Sort By"
                                onChange={handleSort}
                            >
                                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {paginatedProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50/30 rounded-xl border border-dashed border-gray-200">
                            <p className="text-lg font-bold text-gray-500">No products match the selected filters.</p>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={handleClearFilters}
                                sx={{ mt: 2, fontWeight: 'bold', textTransform: 'none' }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
                            {paginatedProducts.map((product) => (
                                <div key={product.id}>
                                    <ProductCard item={product} />
                                </div>
                            ))}
                        </div>
                    )}

                    {filteredProducts.length > 0 && (
                        <div className="flex justify-center mt-12 mb-6">
                            <Pagination 
                                count={pageCount} 
                                page={page} 
                                onChange={(_, val) => setPage(val)} 
                                color="primary" 
                                size="large"
                            />
                        </div>
                    )}
                </section>
            </div>


            <Drawer
                anchor="left"
                open={isMobileFilterOpen}
                onClose={() => setIsMobileFilterOpen(false)}
                sx={{ '& .MuiDrawer-paper': { width: 280 } }}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-bold text-gray-800">Filters</span>
                    <IconButton onClick={() => setIsMobileFilterOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <FilterSection 
                    selectedColor={selectedColor}
                    onColorChange={(val: string) => { setSelectedColor(val); setPage(1); }}
                    selectedPrice={selectedPrice}
                    onPriceChange={(val: string) => { setSelectedPrice(val); setPage(1); }}
                    selectedDiscount={selectedDiscount}
                    onDiscountChange={(val: string) => { setSelectedDiscount(val); setPage(1); }}
                    onClearFilters={handleClearFilters}
                />
            </Drawer>
        </div>
    )
}

export default Product
