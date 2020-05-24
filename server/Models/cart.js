const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId :{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
      type:Number,
       default:1
    },
    size:{
        type:String,
        required:true
    },
    colour:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('shoppingCart',cartSchema);