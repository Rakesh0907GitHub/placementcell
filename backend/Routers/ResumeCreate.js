const express = require('express')
const router = express.Router()
const Resume = require('../models/Resume')

router.post("/createresume",async(req,res)=>{
    
    try {
        await Resume.create({
            firstname: req.body.firstname,
            email: req.body.email,
            location: req.body.location,
            pin: req.body.pin,
            linkedin: req.body.linkedin,
            contact:req.body.contact,
            currentinstitute: req.body.currentinstitute,
            currentpassingyear: req.body.currentpassingyear,
            currentpoints: req.body.currentpoints,
            lastinstitute: req.body.lastinstitute,
            lastpassingyear: req.body.lastpassingyear,
            lastpoints: req.body.lastpoints,
            projectone: req.body.projectone,
            descriptionone: req.body.descriptionone,
            projecttwo: req.body.projecttwo,
            descriptiontwo: req.body.descriptiontwo,
            projectthree: req.body.projectthree,
            skills: req.body.skills,
            achievement:req.body.achievement
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});
    }

})








module.exports = router;