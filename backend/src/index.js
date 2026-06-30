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


app.use('/api/seller',sellerRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/user', userRouter)


app.listen(5000,async ()=>{
    console.log("Backend started")
    await connectDb()
})



