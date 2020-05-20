const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cart = require('../Models/cart');
const fs = require('fs');



//add products to cart
router.post('/',(req,res)=>{

    const cart = new Cart({

        userId :req.body.userId,
        productId:req.body.productId,
        productName:req.body.productName,
        quantity:req.body.quantity,
        size:req.body.size,
        colour:req.body.colour,
        image:req.body.image,
        price:req.body.price

    });

   cart.save()
       .then(data =>{
           res.json(data);
       })
});

router.get('/',async(req,res)=>{

   res.send("Hello");

});
//get details of shopping cart for specific customer
router.get('/:userId',async(req,res)=>{

    try {
        let ItemList = [];
        const cart = await Cart.find({"userId": req.params.userId});

        ItemList = cart;
        await res.json(ItemList);

    }catch(err){
        await res.json({message: err});
    }

});

//update quantity
router.patch('/:id',async (req,res)=>{
    console.log(req.params.id);
    const updated = await Cart.updateOne({_id:req.params.id},
        {$set:{
              quantity:req.body.quantity
            }});

    await res.json(updated);

});

//delete product from the cart

router.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
    try {
        const rPost = await Cart.remove({_id: req.params.id});
    }catch(err){
        await res.json({messgae: err});
    }

});
module.exports = router;