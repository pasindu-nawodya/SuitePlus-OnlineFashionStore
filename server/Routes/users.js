const express = require('express');
const router = express.Router();
const UserDetails = require('../Models/users');

//get all user details
router.get('/',async (req,res)=>{

    try{
        const user = await UserDetails.find();
        res.json(user);
    }catch(err){
        res.json({message:err})
    }
})

//get specific user item
router.get('/:id',async (req,res)=>{
    try{
        const specificUser = await UserDetails.findById(req.params.id);
        res.json(specificUser);
    }catch(err){
        res.json({message:err});
    }
})

//submit user details
router.post('/',(req,res)=>{
    const user = new UserDetails({
        uname:req.body.uname,
        uemail:req.body.uemail,
        upassword:req.body.upassword,
        utel:req.body.utel

    });

    console.log(req.body);

    user.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//update user details
router.post('/:id',async (req,res)=>{
    try{
        const updateUser =await UserDetails.updateOne({_id:req.params.id},
            {$set : {
                    uname:req.body.uname,
                    uemail:req.body.uemail,
                    upassword:req.body.upassword,
                    utel:req.body.utel
                }});

        res.json(updateUser);


    }catch(err){
        res.json({message:err});
    }
})

//delete user details
router.delete('/:id',async (req,res)=>{
    try{
        const deleteUser =await UserDetails.remove({_id: req.params.id});
        res.json(deleteUser);
    }catch(err){
        res.json({message:err});
    }
})


module.exports=router;