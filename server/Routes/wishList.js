const express = require('express');
const router = express.Router();
const wishList = require('../Models/wishlist');

//---get wishList -------------
router.get('/:userId',async(req,res)=>{

    try {
        let ItemList = [];
        const list = await wishList.find({userId: req.params.userId});

        ItemList = list;
        await res.json(ItemList);

    }catch(err){
        await res.json({message: err});
    }

});
//------add items to wishlist------
    router.post('/',async (req,res)=>{


        try{

            const wish = new wishList({
                "userId" :req.body.userId,
                "productId":req.body.productId,
                "productName":req.body.productName,
                "size":req.body.size,
                "colour":req.body.colour,
                "image":req.body.image,
                "price":req.body.price
            });

            await wish.save()
                .then(data=>{
                    res.json(data);
                })
        }catch (err) {
            await res.json({message:err});
        }

});

//----remove items from wishlist----

router.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
    try {
        const rPost = await wishList.remove({_id: req.params.id});
    }catch(err){
        await res.json({messgae: err});
    }

});
module.exports = router;