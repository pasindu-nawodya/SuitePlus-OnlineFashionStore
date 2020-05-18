const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    cname:{type:String,required:true},
    cdesc:{type:String,required:true},


});

module.exports=mongoose.model('category',CategorySchema);