const express = require('express')
const router = express.Router()
const Admin = require('../models/AdminSch')
const AddCompany = require('../models/AddCompany')
const {body,validationResult} = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "MynameisEndtoEndMaheshChannel$#"

router.post("/loginadmin",async(req,res)=>{

    
    let email= req.body.email;
    try {
        let userData= await Admin.findOne({email});

        if(!userData){
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        if(userData.password !== req.body.password)
        {
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        
        return res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})


router.post("/addcompany",[body('email').isEmail(),body('name').isLength({min:5}),body('password').isLength({min:5})],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
        await AddCompany.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            contact:req.body.contact
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})

router.post("/logincompany",[body('email').isEmail(),body('password').isLength({min:5})],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    let email= req.body.email;
    try {
        let userData= await AddCompany.findOne({email});

        if(!userData){
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare)
        {
            return res.status(400).json({errors:"try logging with correct credentials"});
        }


        const data={
            company:{
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


module.exports = router;