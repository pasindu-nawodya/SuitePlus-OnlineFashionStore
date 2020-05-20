const express = require('express');
const router = express.Router();
const StockManagerDetails = require('../Models/stockManagerTable');

//get all stockManager details
router.get('/',async (req,res)=>{

    try{
        const stockManager = await StockManagerDetails.find();
        res.json(stockManager);
    }catch(err){
        res.json({message:err})
    }
})

//get specific stockManager
router.get('/:id',async (req,res)=>{
    try{
        const specificStockManager = await StockManagerDetails.findById(req.params.id);
        res.json(specificStockManager);
    }catch(err){
        res.json({message:err});
    }
})

//submit stockManager details
router.post('/',(req,res)=>{
    const stockManager = new StockManagerDetails({
        sname:req.body.sname,
        semail:req.body.semail,
        spassword:req.body.spassword,
        stel:req.body.stel,
    });

    console.log(req.body);

    stockManager.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update stockManager details
router.post('/:id',async (req,res)=>{
    try{
        const updateStockManager =await StockManagerDetails.updateOne({_id:req.params.id},
            {$set : {
                    sname:req.body.sname,
                    semail:req.body.semail,
                    spassword:req.body.spassword,
                    stel:req.body.stel,
                }});

        res.json(updateStockManager);


    }catch(err){
        res.json({message:err});
    }
})

//delete stockManager details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteStockManager =await StockManagerDetails.remove({_id: req.params.id});
        res.json(deleteStockManager);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;