const express = require('express')
const router = express.Router()

router.post('/displaydat',(req,res)=>{
    try {
        res.send([global.jobdata])
        
    } catch (error) {
        console.log(error.message);
        res.send("Error hey dislpay main")   
    }
})

router.post('/displayCompanydata',(req,res)=>{
    try {
        res.send([global.jobdata])
        
    } catch (error) {
        console.log(error.message);
        res.send("Error hey dislpay main")   
    }
})
module.exports = router;