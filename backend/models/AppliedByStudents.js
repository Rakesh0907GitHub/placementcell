const mongoose = require('mongoose')

const {Schema} =mongoose;

const AppliedSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    resume:{
        type:String
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }    

});

module.exports = mongoose.model('appliedStudents',AppliedSchema)