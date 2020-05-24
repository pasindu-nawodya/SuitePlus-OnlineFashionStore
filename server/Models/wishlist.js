const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema(
    {
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


    }
);

module.exports = mongoose.model('WishList',wishlistSchema);