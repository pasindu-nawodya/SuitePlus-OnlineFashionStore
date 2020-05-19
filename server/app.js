const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const productRoute = require('./Routes/product');
const CartRoute = require('./routes/shoppingCart');
const wishListRouter = require('./routes/wishList');
const categoryRoute = require('./Routes/category');
const stockManagerRoute = require('./Routes/stockManager');

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/product',productRoute);
app.use('/cart',CartRoute);
app.use('/wishlist',wishListRouter);
app.use('/category',categoryRoute);
app.use('/stockManager',stockManagerRoute);

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