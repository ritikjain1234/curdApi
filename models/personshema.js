const mongoose = require("mongoose");

const personInfo = new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
    },
    Id:{
        type:Number,
        required:true,
        unique:true
    },
    City:{
        type:String,
        default:"Agra"
    }
});

const PersonData = new mongoose.model("personData",personInfo);

module.exports = PersonData;