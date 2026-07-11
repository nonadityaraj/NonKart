import { Grid, Typography } from '@mui/material'

const dummySimilarProducts = [
  {
    id: 101,
    title: "Floral Printed Satin Saree",
    brand: "Pablo Clothing",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/f/6/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhzjxru2ne.jpeg?q=70"
  },
  {
    id: 102,
    title: "Embellished Silk Blend Saree",
    brand: "Pablo Clothing",
    price: 2299,
    originalPrice: 3499,
    discount: 34,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/v/g/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhn2fph2hz.jpeg?q=70"
  },
  {
    id: 103,
    title: "Solid Chiffon Saree with Border",
    brand: "Laxmipati",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/r/f/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhthh6tzgf.jpeg?q=70"
  },
  {
    id: 104,
    title: "Banarasi Cotton Traditional Saree",
    brand: "Mimosa",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/n/u/g/free-2425s307-mimosa-unstitched-original-imahfnydfbypyfyx.jpeg?q=70"
  },
  {
    id: 105,
    title: "Georgette Floral Casual Saree",
    brand: "Varkala Silk",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/k/w/free-k-05-varkala-silk-sarees-unstitched-original-imahye6jzkdzfyhz.jpeg?q=70"
  }
];

const SimilarProduct = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <Typography variant="h6" className="text-2xl font-semibold text-gray-900 uppercase tracking-widest block mb-6" sx={{ fontFamily: "Inter, sans-serif" ,fontWeight: 900,}}>
        Similar Products
      </Typography>
      <div></div>
      <Grid container spacing={3}>
        {dummySimilarProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 2.4 }}>
            <div className="border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-sm transition-all duration-200 group cursor-pointer font-sans">
              <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-3 space-y-1">
                <Typography className="text-[10px] font-bold text-[#004d40] uppercase tracking-wider block">
                  {product.brand}
                </Typography>
                <Typography className="text-xs font-semibold text-gray-700 truncate block">
                  {product.title}
                </Typography>
                <div className="flex items-baseline gap-1.5 pt-0.5">
                  <span className="text-xs font-bold text-gray-900">₹{product.price}</span>
                  <span className="text-[10px] text-gray-400 line-through">₹{product.originalPrice}</span>
                  <span className="text-[10px] text-[#00927c] font-bold">{product.discount}% off</span>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SimilarProduct
