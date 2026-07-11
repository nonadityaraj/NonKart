import { ThemeProvider } from "@mui/material"
import { Theme } from "./Theme/theme"
import Navbar from "./Title/Navbar"
import Footer from "./Components/Footer"
// import Product from "./pages/Product/Product"
// import ProductDetails from "./pages/Product/ProductDetail/ProductDetails"
import Cart from "./pages/Cart/Cart"

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Cart />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App