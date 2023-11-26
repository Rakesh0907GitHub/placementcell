const express = require('express')
const router = express.Router()
const Jobs = require('../models/Jobs')
const AddCompany = require('../models/AddCompany')
const AppledByStudent = require('../models/AppliedByStudents')

router.post("/loadCompanyDetails",async(req,res)=>{
    try {
        let mydata = await AddCompany.findOne({'email':req.body.email})
        res.json({adminData:mydata})
    } catch (error)
    {
        res.send("server error",error.message)
    }
})

router.post("/updateStatus", async (req, res) => {
    try {
        // Find the document to update based on the provided criteria
        const mydata = await AppledByStudent.findOne({
            'studentEmail': req.body.studentEmail,
            'studentName': req.body.studentName,
            'name': req.body.name,
            'role': req.body.role,
            
        });

        if (!mydata) {
            // Handle the case where the document is not found
            return res.status(404).json({ success: false, message: 'Document not found' });
        }

        // Update the status field to "Accepted"
        mydata.status = "Accepted";

        // Save the updated document to the database
        await mydata.save();

        console.log(mydata);
        res.json({ success: true, mydata });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;