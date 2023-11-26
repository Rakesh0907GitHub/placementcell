const mongoose = require('mongoose')

const {Schema} =mongoose;

const JobsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    CategoryName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    CTC:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }    

});

module.exports = mongoose.model('jobslist',JobsSchema)