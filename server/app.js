const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const productRoute = require('./Routes/product');

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/product',productRoute);

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