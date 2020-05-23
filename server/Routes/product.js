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

//get specific product item
router.get('/:id',async (req,res)=>{
    try{
        const specificProduct = await ProductDetails.findById(req.params.id);
        res.json(specificProduct);
    }catch(err){
        res.json({message:err});
    }
})

//submit product details
router.post('/',(req,res)=>{
    const product = new ProductDetails({
        pname:req.body.pname,
        pprice:req.body.pprice,
        pdiscount:req.body.pdiscount,
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

//update product details
router.post('/:id',async (req,res)=>{
    try{
        const updateProduct =await ProductDetails.updateOne({_id:req.params.id},
            {$set : {
                    pname:req.body.pname,
                    pprice:req.body.pprice,
                    pdiscount:req.body.pdiscount,
                    pqty:req.body.pqty,
                    pcategory:req.body.pcategory,
                    psize:req.body.psize,
                    prange:req.body.prange,
                    pgender:req.body.pgender,
                    pdesc:req.body.pdesc,
                    pimage:req.body.pimage
                }});
        
            res.json(updateProduct);


    }catch(err){
        res.json({message:err});
    }
})

//delete product details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteProduct =await ProductDetails.remove({_id: req.params.id});
        res.json(deleteProduct);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;