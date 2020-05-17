const express = require('express');
const router = express.Router();
const ProductDetails = require('../Models/productTable');

//get all product details
router.get('/',async (req,res)=>{
    
    try{
        const product = await ProductDetails.find();
        res.json(product);
    }catch(err){
        res.json({message:err})
    }
})


//submit product details
router.post('/',(req,res)=>{
    const product = new ProductDetails({
        pname:req.body.pname,
        pprice:req.body.pprice,
        pqty:req.body.pqty,
        pcategory:req.body.pcategory,
        psize:req.body.psize,
        prange:req.body.prange,
        pgender:req.body.pgender,
        pdesc:req.body.pdesc,
        pimage:req.body.pimage
    });

    console.log(req.body);

    product.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err=>{
        res.json({message:err})
    })
})

//view users
/*
router.get('/:userid',async (req,res)=>{
    try{
        const specificUser = await UserDetails.findById(req.params.userid);
        res.json(specificUser);
    }catch(err){
        res.json({message:err});
    }
})

*/

module.exports=router;