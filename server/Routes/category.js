const express = require('express');
const router = express.Router();
const CategoryDetails = require('../Models/categoryTable');

//get all category details
router.get('/',async (req,res)=>{

    try{
        const category = await CategoryDetails.find();
        res.json(category);
    }catch(err){
        res.json({message:err})
    }
})

//get specific category item
router.get('/:id',async (req,res)=>{
    try{
        const specificCategory = await CategoryDetails.findById(req.params.id);
        res.json(specificCategory);
    }catch(err){
        res.json({message:err});
    }
})

//submit category details
router.post('/',(req,res)=>{
    const category = new CategoryDetails({
        cname:req.body.cname,
        cdesc:req.body.cdesc,
    });

    console.log(req.body);

    category.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update category details
router.post('/:id',async (req,res)=>{
    try{
        const updateCategory =await CategoryDetails.updateOne({_id:req.params.id},
            {$set : {
                    cname:req.body.cname,
                    cdesc:req.body.cdesc,
                }});

        res.json(updateCategory);


    }catch(err){
        res.json({message:err});
    }
})

//delete category details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteCategory =await CategoryDetails.remove({_id: req.params.id});
        res.json(deleteCategory);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;