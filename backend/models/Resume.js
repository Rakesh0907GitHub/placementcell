const mongoose = require('mongoose')

const {Schema} =mongoose;

const ResumeSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    linkedin:{
        type:String
    },
    contact:{
        type:String,
        required:true
    },
    currentinstitute:{
        type:String,
        required:true
    },
    currentpassingyear:{
        type:String,
        required:true
    },
    currentpoints:{
        type:String
    },
    lastinstitute:{
        type:String,
        required:true
    },
    lastpassingyear:{
        type:String,
        required:true
    },
    lastpoints:{
        type:String,
        required:true
    },
    projectone:{
        type:String,
        required:true
    },
    descriptionone:{
        type:String,
        required:true
    },
    projecttwo:{
        type:String,
    },
    descriptiontwo:{
        type:String,
    },
    projectthree:{
        type:String,
        required:true
    },
    descriptionthree:{
        type:String
    },
    skills:{
        type:String,
        required:true
    },
    achievement:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }    

});

module.exports = mongoose.model('studentresumes',ResumeSchema)