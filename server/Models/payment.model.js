let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let paymentSchema = new Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    contact:{type:Number, required:true},
    cardnumber:{type:Number, required:true},
    cvv:{type:Number, required:true},
    expdate:{type:Date, required:true},
},
    {
        timestamps:true,
    }
);

let payment = mongoose.model('payment', paymentSchema);
module.exports = payment;


