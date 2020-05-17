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
      required:true
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
        type: Buffer

    },
    price:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('shoppingCart',cartSchema);