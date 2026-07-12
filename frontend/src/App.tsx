import { ThemeProvider } from "@mui/material"
import { Theme } from "./Theme/theme"
import Navbar from "./Customer/components/Navbar"
import Footer from "./Customer/components/Footer"
import Cart from "./Customer/pages/Cart/Cart"
import ProfilePage from "./Customer/pages/ProfilePage/ProfilePage"
import { Route, Routes } from "react-router"
import Home from "./Customer/pages/home/Home"
import Product from "./Customer/pages/Product/Product"
import ProductDetails from "./Customer/pages/Product/ProductDetail/ProductDetails"
import Checkout from "./Customer/pages/Checkout/Checkout"

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
        <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/products/:categoryId" element= {<Product/>}/>
        <Route path="/products/:categoryId/:name/:productId" element= {<ProductDetails/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/checkout" element = {<Checkout/>}/>
        <Route path="/account/*" element = {<ProfilePage/>}/>
        
        </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App