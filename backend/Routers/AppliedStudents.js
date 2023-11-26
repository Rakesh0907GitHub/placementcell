const express = require('express')
const router = express.Router()
const AppliedStudent = require('../models/AppliedByStudents')
const User = require('../models/User')

router.post('/appliedbystudent',async(req,res)=>{
    let email= req.body.studentEmail;
    try {
        let StudentData= await User.findOne({email});

        await AppliedStudent.create({
            name:req.body.name,
            role:req.body.role,
            studentName:StudentData.name,
            studentEmail:StudentData.email,
            resume:StudentData.resume,
            status:"Not Accepted"
        })
        res.json({success:true});
    } catch (error) {
        console.log("--------yaha hhy",error.message);
        res.json({success:false});
    }
})

module.exports = router;