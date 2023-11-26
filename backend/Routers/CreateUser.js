const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Resume = require('../models/Resume')
const {body,validationResult} = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "MynameisEndtoEndMaheshChannel$#"

router.post("/createuser",[body('email').isEmail(),body('name').isLength({min:5}),body('password').isLength({min:5})],async(req,res)=>{
    console.log(req.file)
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name:req.body.name,
            rollno:req.body.rollno,
            password:secPassword,
            email:req.body.email
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})


router.post("/loginuser",[body('email').isEmail(),body('password').isLength({min:5})],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    let email= req.body.email;
    try {
        let userData= await User.findOne({email});

        if(!userData){
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare)
        {
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        const data={
            user:{
                id:userData.id
            }

        }

        const authToken = jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})


router.post("/viewstudentsresume", async (req, res) => {
    
    try {
        // Find the document to update based on the provided criteria
        const mydata = await Resume.findOne({
            'email': req.body.studentEmail
        });

        if (!mydata) {
            // Handle the case where the document is not found
            return res.status(404).json({ success: false, message: 'Document not found' });
        }


        console.log(mydata);
        res.json(mydata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});



module.exports = router;