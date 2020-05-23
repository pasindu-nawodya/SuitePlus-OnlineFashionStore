const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const productRoute = require('./Routes/product');
const CartRoute = require('./Routes/shoppingCart');
const wishListRouter = require('./Routes/wishList');
const categoryRoute = require('./Routes/category');
const stockManagerRoute = require('./Routes/stockManager');
const paymentRoute = require('./Routes/payment');
const userRoute = require('./Routes/users');

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/product',productRoute);
app.use('/cart',CartRoute);
app.use('/wishlist',wishListRouter);
app.use('/category',categoryRoute);
app.use('/stockManager',stockManagerRoute);
app.use('/payment', paymentRoute);
app.use('/user', userRoute);

//get
app.get('/',(req,res)=>{
    res.send('App.JS Page')
})

//db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log('Database connected!')
)

app.listen(4000);
