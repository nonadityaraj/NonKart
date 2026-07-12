import Electronic from './ECategory/electronic'
import Grid from './grid/Grid'
import Deal from './Deal/Deal'
import ShopByCategoryContainer from './ShopByCateGory/ShopByCategoryContainer'
import Navbar from '../../components/Navbar'
import { Button } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store';

const Home = () => {
  return (
    <div>
        <Electronic/>
        <section>
          <Grid/>
        </section>
        <section>
          <Deal/>
        </section>
        <section>
          <ShopByCategoryContainer/>
        </section>
        <section className='px-4 sm:px-8 md:px-12 mb-[20rem] lg:px-20 relative h-[250px] md:h-[400px] w-full mt-10 md:mt-16'>
          <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg'>
            <img 
              className='w-full h-full object-cover' 
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4z8aSILxB9CTQcuC5YVsNy/93e687aa229e2576cbe271ded062fbe4/GettyImages-1824217014.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000" 
              alt="Sell on NoNKart" 
            />

            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent' />
            
            <div className='absolute top-1/2 left-6 md:left-16 lg:left-24 transform -translate-y-1/2 text-white font-semibold space-y-2 md:space-y-4 max-w-xs sm:max-w-md md:max-w-lg'>
              <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight'>Sell your Product</h1>
              <p className='text-sm sm:text-base md:text-xl text-gray-200'>
                With <strong className='text-teal-400 font-extrabold text-lg sm:text-xl md:text-3xl ml-1'>NoNKart</strong>
              </p>

              <div className='pt-2 md:pt-4'>
                <Button 
                  startIcon={<StoreIcon />} 
                  variant='contained' 
                  color="primary"
                  size="large"
                  sx={{ 
                    borderRadius: '8px', 
                    py: { xs: 1, md: 1.5 }, 
                    px: { xs: 2.5, md: 4 }, 
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}
                >
                  Become Seller
                </Button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home