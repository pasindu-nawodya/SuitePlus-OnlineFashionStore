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
<<<<<<< HEAD
const stockManagerRoute = require('./Routes/stockManager');
=======
const paymentRoute = require('./Routes/payment');
>>>>>>> a7d0700bb23c468c1b77796b20f88ad0baaffc42

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/product',productRoute);
app.use('/cart',CartRoute);
app.use('/wishlist',wishListRouter);
app.use('/category',categoryRoute);
<<<<<<< HEAD
app.use('/stockManager',stockManagerRoute);
=======
app.use('/payment', paymentRoute);
>>>>>>> a7d0700bb23c468c1b77796b20f88ad0baaffc42

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
