const mongoose = require('mongoose');

const StockManagerSchema = mongoose.Schema({
    sname:{type:String,required:true},
    semail:{type:String,required:true},
    spassword:{type:String,required:true},
    stel:{type:String,required:true},


});

module.exports=mongoose.model('stockManager',StockManagerSchema);