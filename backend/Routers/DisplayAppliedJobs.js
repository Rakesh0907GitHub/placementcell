const express = require('express')
const router = express.Router()
const User = require('../models/User')
const AppliedByStudents = require('../models/AppliedByStudents')

router.post('/displayappliedjo',(req,res)=>{
    try {
        console.log([global.Appliedjobdata])
        res.send([global.Appliedjobdata])
        
    } catch (error) {
        console.log(error.message);
        res.send("Error hey dislpay main")   
    }
})

module.exports = router;