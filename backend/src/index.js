const express = require('express')
const connectDb = require('./config/db')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get("/", (req,res)=>{
    res.send({
        message:"Welcome to Nonbazar backend system"
    })
})


const adminRoutes = require('./routes/adminRoutes')
const sellerRoutes = require('./routes/sellerRoutes')
const authRoutes = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRoutes = require('./routes/productsRoutes')
const sellerProductRoutes = require('./routes/sellerProductRouter')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const sellerOrderRoutes = require('./routes/sellerOrderRoutes')
const dealRoutes = require('./routes/dealRoutes')
const homeCategoryRoutes = require('./routes/homeCategoryRoutes')




app.use('/api/seller',sellerRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user', userRouter)
app.use('/product',productRoutes)
app.use('/api/sellers/product',sellerProductRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/seller/order',sellerOrderRoutes) 
app.use('/home',homeCategoryRoutes)
app.use('/admin/deals',dealRoutes)


app.listen(5000,async ()=>{
    console.log("Backend started")
    await connectDb()
})



