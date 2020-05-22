const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    uname:{type:String,required:true},
    uemail:{type:String,required:true},
    upassword:{type:String,required:true},
    utel:{type:String,required:true},

});

module.exports=mongoose.model('user',UserSchema);