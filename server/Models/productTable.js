const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    pname:{type:String,required:true},
    pprice:{type:Number,required:true},
    pdiscount:{type:Number,required:true},
    pqty:{type:Number,required:true},
    pcategory:{type:String,required:true},
    psize:{type:String,required:true},
    prange:{type:String,required:true},
    pgender:{type:String,required:true},
    pdesc:{type:String,required:true},
    pimage:{type:String,required:true}
    
});

module.exports=mongoose.model('product',ProductSchema);