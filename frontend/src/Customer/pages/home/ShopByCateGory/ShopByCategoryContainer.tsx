import ShopByCategoryCard from './ShopByCategoryCard'
import type { Category } from './ShopByCategoryCard'
import { Grid } from '@mui/material'

const categories: Category[] = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "T-Shirt"
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Jeans"
  },
  {
    id: 3,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Sneakers"
  },
  {
    id: 4,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Watches"
  },
  {
    id: 5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Bags"
  },
  {
    id: 6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Activewear"
  },
  {
    id: 7,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Sun Glasses"
  },
  {
    id: 8,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Jackets"
  },
  {
    id: 9,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/3/r/s-ts135-vebnor-original-imahng6nbmdybgrg.jpeg?q=70",
    title: "Fragrances"
  }
]

const ShopByCategoryContainer = () => {
  return (
    <div className='mt-10 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-20 pb-12'>
            <h2 className='text-center text-2xl md:text-4xl font-bold text-teal-600 mb-6 md:mb-10' >Shop By Category</h2>
      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'center' }}>
        {categories.map((item) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 2.4, lg: 2.4 }}
            key={item.id}
          >
            <ShopByCategoryCard category={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ShopByCategoryContainer
