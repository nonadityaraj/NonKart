import { useState } from 'react'
import { 
  Grid, 
  IconButton, 
  Typography, 
  Divider, 
  Button, 
  LinearProgress
} from '@mui/material'
import { 
  FavoriteBorder, 
  Favorite, 
  ShoppingCart, 
  Add, 
  Remove, 
  LocalShipping, 
  Security, 
  WorkspacePremium, 
  Payment,
  PinDrop
} from '@mui/icons-material'
import SimilarProduct from './similarProduct'

const productDetailsData = {
  id: 1,
  title: "Pink Floral Patterned Saree",
  brand: "Pablo Clothing",
  price: 2499,
  originalPrice: 3999,
  discount: 38,
  color: "Pink",
  category: "Saree",
  rating: 4,
  ratingCount: 358,
  reviewCount: 46,
  seller: {
    name: "Pablo Retail",
    rating: 4.6,
  },
  images: [
    "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/z/f/6/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhzjxru2ne.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/1536/1536/xif0q/sari/5/t/c/free-n-3142-laxmipati-sarees-unstitched-original-imahjrykjtwghyhp.jpeg?q=90",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/sari/d/r/f/free-masterbolte-laxmmipati-sarees-unstitched-original-imahz6jhthh6tzgf.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/1536/1536/xif0q/sari/5/t/c/free-n-3142-laxmipati-sarees-unstitched-original-imahjrykjtwghyhp.jpeg?q=90"
  ],
  description: "This pink saree boasts a delightful floral pattern across its body, lending an air of grace and femininity. The border is elegantly adorned with intricate floral motifs, enhancing its charm. Handcrafted with precision, it's perfect for special occasions, weddings, or cultural celebrations.",
  details: [
    { name: "Fabric", value: "Georgette" },
    { name: "Pattern", value: "Floral Patterned" },
    { name: "Style", value: "Bollywood Saree" },
    { name: "Blouse Piece", value: "Unstitched (Included)" },
    { name: "Blouse Length", value: "0.8 m" },
    { name: "Saree Length", value: "5.5 m" },
    { name: "Occasion", value: "Festive, Wedding, Party" },
    { name: "Care Instructions", value: "Dry Clean Only" }
  ],
  offers: [
    { id: 1, text: "Bank Offer: Flat ₹125 off on SBI Credit Card transactions on min purchase of ₹1,499." },
    { id: 2, text: "Special Discount: Get extra 10% off (price inclusive of cashback/coupon)." },
    { id: 3, text: "Partner Offer: Sign up with NoNKart Pay Later & get free ₹100 Gift Voucher." }
  ],
  reviews: [
    {
      id: 1,
      name: "Anjali S.",
      rating: 5,
      date: "Jul 05, 2026",
      comment: "Absolutely gorgeous saree! The fabric quality is amazing and the border details look extremely premium. Highly recommended!",
      helpfulCount: 24,
    },
    {
      id: 2,
      name: "Pooja Sharma",
      rating: 4,
      date: "Jun 28, 2026",
      comment: "Very beautiful saree, the color is exactly as shown in photos. Blouse fabric is also good. Delivery was fast.",
      helpfulCount: 12,
    }
  ]
};

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [inWishlist, setInWishlist] = useState(false)
  const [pincode, setPincode] = useState("")
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null)

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handlePincodeCheck = () => {
    if (/^\d{6}$/.test(pincode)) {
      setPincodeStatus("Delivery available (Delivery by Tuesday, Jul 14)")
    } else {
      setPincodeStatus("Please enter a valid 6-digit Indian Pincode")
    }
  }

  return (
    <div className="bg-white min-h-screen py-8 font-sans antialiased text-gray-800">
      {styleTag}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        <Grid container spacing={5}>
          
          {/* Left Column: Photos & Action Buttons */}
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="flex flex-col lg:flex-row gap-4">
              
              {/* Vertical Thumbnails List */}
              <div className="flex lg:flex-col flex-row gap-2.5 order-2 lg:order-1 justify-center lg:justify-start">
                {productDetailsData.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-14 h-18 sm:w-16 sm:h-20 border rounded overflow-hidden cursor-pointer transition-all duration-200 bg-white flex-shrink-0 ${
                      index === activeImage 
                        ? 'border-[#00927c] border-2 shadow-xs scale-[1.02]' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover object-top" />
                  </div>
                ))}
              </div>

              {/* Main large image */}
              <div className="relative w-full h-[380px] sm:h-[480px] border border-gray-200 rounded overflow-hidden bg-gray-50 order-1 lg:order-2 flex-grow shadow-xs">
                <img
                  src={productDetailsData.images[activeImage]}
                  alt={productDetailsData.title}
                  className="w-full h-full object-cover object-top"
                />

                {/* Wishlist Button floating over image */}
                <IconButton
                  onClick={() => setInWishlist(!inWishlist)}
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: 1,
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {inWishlist ? <Favorite className="text-red-500" /> : <FavoriteBorder className="text-gray-500" />}
                </IconButton>
              </div>
            </div>
          </Grid>

          {/* Right Column: Pricing, Offers, Specifications, Seller Info */}
          <Grid size={{ xs: 12, md: 6 }} className="space-y-5">
            
            {/* Header info */}
            <div className="space-y-1">
              <h3 className="text-[#004d40]  text-1xl tracking-tight">
                {productDetailsData.brand}
              </h3>
              <h1 className="text-3xl font-black text-gray-800 tracking-wide uppercase">
                {productDetailsData.title}
              </h1>
            </div>

            {/* Ratings & Reviews box */}
            <div className="inline-flex items-center border border-gray-200 rounded-md px-3.5 py-1.5 gap-2.5 bg-gray-50/20">
              <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                <span>{productDetailsData.rating}</span>
                <span className="text-[#00927c] text-sm">★</span>
              </div>
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-xs text-gray-500 font-bold tracking-wide">
                {productDetailsData.ratingCount} Ratings
              </span>
            </div>

            {/* Pricing Panel */}
            <div className="space-y-1.5">
              <div className="flex items-baseline gap-2.5">
                <Typography className="text-3xl font-extrabold text-[#004d40] tracking-tight">
                  ₹{productDetailsData.price}
                </Typography>
                <Typography className="text-gray-400 line-through text-base font-medium">
                  ₹{productDetailsData.originalPrice}
                </Typography>
                <Typography className="text-[#00927c] font-extrabold text-base tracking-wide">
                  {productDetailsData.discount}% off
                </Typography>
              </div>
              <Typography className="text-xs text-gray-400 font-semibold block leading-normal">
                Inclusive of all taxes. Free Shipping above ₹1500.
              </Typography>
            </div>

            {/* Trust List */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-650 font-bold tracking-wide">
                <Security className="text-[#00927c]" fontSize="small" />
                <span>Authentic & Quality Assured</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-650 font-bold tracking-wide">
                <WorkspacePremium className="text-[#00927c]" fontSize="small" />
                <span>100% money back guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-650 font-bold tracking-wide">
                <LocalShipping className="text-[#00927c]" fontSize="small" />
                <span>Free Shipping & Returns</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-650 font-bold tracking-wide">
                <Payment className="text-[#00927c]" fontSize="small" />
                <span>Pay on delivery might be available</span>
              </div>
            </div>

            {/* Quantity select */}
            <div className="space-y-2 pt-2">
              <Typography className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Quantity</Typography>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition-colors"
                >
                  <Remove className="text-sm" />
                </button>
                <span className="w-6 text-center font-bold text-gray-800 text-sm">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center border border-[#00927c] text-[#00927c] rounded bg-white hover:bg-teal-50 transition-colors"
                >
                  <Add className="text-sm" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-4 mt-6">
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={() => alert("Added to bag")}
                sx={{
                  flex: 1,
                  py: 1.6,
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  backgroundColor: '#00927c',
                  '&:hover': {
                    backgroundColor: '#00796b',
                  },
                }}
              >
                ADD TO BAG
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FavoriteBorder />}
                onClick={() => setInWishlist(!inWishlist)}
                sx={{
                  flex: 1,
                  py: 1.6,
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  borderColor: '#00927c',
                  color: '#00927c',
                  '&:hover': {
                    borderColor: '#00796b',
                    backgroundColor: '#eaf5f3',
                  },
                }}
              >
                WHISHLIST
              </Button>
            </div>

            <Divider className="border-gray-100 my-5" />

            {/* Description */}
            <div className="space-y-2">
              <Typography className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Product Details</Typography>
              <Typography className="text-xs font-semibold text-gray-600 leading-relaxed text-justify">
                {productDetailsData.description}
              </Typography>
            </div>

            {/* PinCode Delivery Check */}
            <div className="space-y-2 max-w-sm pt-4">
              <Typography className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Delivery Check</Typography>
              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <PinDrop fontSize="small" />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded text-sm font-semibold focus:outline-none focus:border-[#00927c] transition-colors"
                  />
                </div>
                <Button 
                  variant="outlined" 
                  onClick={handlePincodeCheck}
                  sx={{ 
                    borderColor: '#00927c', 
                    color: '#00927c', 
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      borderColor: '#00796b',
                      backgroundColor: '#eaf5f3',
                    }
                  }}
                >
                  Check
                </Button>
              </div>
              {pincodeStatus && (
                <Typography className={`text-xs font-semibold ${pincodeStatus.includes("available") ? "text-green-600" : "text-red-500"}`}>
                  {pincodeStatus}
                </Typography>
              )}
            </div>

            {/* Indian-retail Special Bank Offers */}
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50/40 space-y-2.5 pt-4">
              <Typography className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Available Offers</Typography>
              <div className="space-y-2">
                {productDetailsData.offers.map((offer) => (
                  <div key={offer.id} className="flex items-start gap-2 text-xs text-gray-600 font-medium leading-relaxed">
                    <span className="text-[#00927c] font-bold">🏷️</span>
                    <span>{offer.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications list */}
            <div className="space-y-2 pt-4">
              <Typography className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Product Specifications</Typography>
              <div className="border border-gray-200 rounded overflow-hidden shadow-2xs">
                {productDetailsData.details.map((detail, idx) => (
                  <div key={idx} className={`grid grid-cols-3 text-xs p-3 ${idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}>
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{detail.name}</span>
                    <span className="text-gray-750 font-bold col-span-2">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Divider className="border-gray-100" />

            {/* Ratings Breakdown & Customer Reviews */}
            <div className="space-y-5 pt-4">
              <Typography className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Ratings & Reviews</Typography>
              
              <div className="border border-gray-200 rounded-md p-5 bg-white">
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                  <Grid size={{ xs: 12, sm: 4 }} className="text-center sm:border-r border-gray-100 space-y-1.5">
                    <Typography className="text-4xl font-extrabold text-gray-800 tracking-tight">
                      {productDetailsData.rating} ★
                    </Typography>
                    <Typography className="text-[10px] text-gray-450 font-bold uppercase tracking-widest leading-normal">
                      {productDetailsData.ratingCount} Ratings &<br />
                      {productDetailsData.reviewCount} Reviews
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 8 }} className="space-y-2">
                    {[
                      { stars: 5, pct: 70, count: "2,271" },
                      { stars: 4, pct: 18, count: "584" },
                      { stars: 3, pct: 7, count: "227" },
                      { stars: 2, pct: 3, count: "97" },
                      { stars: 1, pct: 2, count: "66" }
                    ].map((row) => (
                      <div key={row.stars} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-wider">
                        <span className="w-10 text-right">{row.stars} Star</span>
                        <div className="flex-grow">
                          <LinearProgress 
                            variant="determinate" 
                            value={row.pct} 
                            sx={{ 
                              height: 6, 
                              borderRadius: 3, 
                              backgroundColor: '#f3f3f3',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: '#388e3c',
                              }
                            }}
                          />
                        </div>
                        <span className="w-10 text-left text-gray-400">{row.count}</span>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </div>

              {/* Individual reviews */}
              <div className="space-y-4">
                {productDetailsData.reviews.map((review) => (
                  <div key={review.id} className="border border-gray-100 rounded-md p-4 space-y-2.5 shadow-2xs bg-white">
                    <div className="flex items-center gap-2.5">
                      <span className="bg-[#388e3c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        {review.rating} ★
                      </span>
                      <span className="text-xs font-bold text-gray-700">Certified Buyer</span>
                      <span className="text-[10px] text-gray-400 font-bold tracking-wider ml-auto">{review.date}</span>
                    </div>
                    <Typography className="text-xs text-gray-650 leading-relaxed font-semibold text-justify">
                      {review.comment}
                    </Typography>
                    <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider justify-between pt-2 border-t border-gray-50">
                      <span className="text-gray-500">{review.name}</span>
                      <span>👍 {review.helpfulCount} helpful approvals</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </Grid>
        </Grid>

        {/* Similar Products Component */}
        <SimilarProduct />

      </div>
    </div>
  )
}

// Inline styling block to enforce pure Inter sans-serif typography across the whole details component
const styleTag = (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    .font-sans {
      font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
    }
  `}</style>
)

export default ProductDetails