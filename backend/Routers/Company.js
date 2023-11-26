const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const AddCompany = require('../models/AddCompany')

router.post("/createjobs",async(req,res)=>{
    
    try {
        await Jobs.create({
            name:req.body.name,
            CategoryName:req.body.CategoryName,
            description:req.body.description,
            CTC:req.body.CTC
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})





module.exports = router;