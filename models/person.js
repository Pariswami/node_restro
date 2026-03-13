const mongoose = require('mongoose');

// define person schema or model
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true//for mandatory name
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});
//create person schema 
const person=mongoose.model('person',personSchema);
module.exports =person;