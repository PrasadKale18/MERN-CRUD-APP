const express = require('express');
const router = express.Router();
const userService = require('../service/service');

router.post('/postdata',async(req,res)=>{
    try {
        const {fname,lname,email,password} = req.body
        const result =await userService.save(fname,lname,email,password);
        res.send({
            status:200,
            success:true,
            data:result,
            message:'data post successfully!'
        })
    } catch (error) {
        res.send({
            status:400,
            success:false,
            data:undefined,
            message:'error'
        })
    }
});

router.get('/getdata',async(req,res)=>{
    try {
        const result =await userService.getAllCollection();
        res.send({
            status:200,
            success:true,
            data:result,
            message:'data get successfully!'
        })
    } catch (error) {
        res.send({
            status:400,
            success:false,
            data:undefined,
            message:'error'
        })
    }
});

router.get('/getone/:id',async(req,res)=>{
    try {
        const result =await userService.getCollection(req.params.id);
        res.send({
            status:200,
            success:true,
            data:result,
            message:'data get successfully!'
        })
    } catch (error) {
        res.send({
            status:400,
            success:false,
            data:undefined,
            message:'error'
        })
    }
});

router.put('/updatedata/:id',async(req,res)=>{
    try {
        const result =await userService.updateCollection(req.params.id, req.body);
        res.send({
            status:200,
            success:true,
            data:result,
            result:'data update successfully!'
        })
    } catch (error) {
        res.send({
            status:400,
            success:false,
            data:undefined,
            result:'error'
        })
    }
});

router.delete('/deletedata/:id',async(req,res)=>{
    try {
        const result =await userService.deleteCollection(req.params.id);
        res.send({
            status:200,
            success:true,
            data:result,
            message:'data delete successfully!'
        })
    } catch (error) {
        res.send({
            status:400,
            success:false,
            data:undefined,
            message:'error'
        })
    }
})

module.exports = router