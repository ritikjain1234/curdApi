const mongoose = require("mongoose");
const joi = require("joi");
const joigoose = require("joigoose")(mongoose);
 
//normal Schema without using joi
// // const personInfo = new mongoose.Schema({
// //     Name:{
// //         type:String,
// //         trim:true,
// //     },
// //     Id:{
// //         type:Number,
// //         required:true,
// //         unique:true
// //     },
// //     City:{
// //         type:String,
// //         default:"Agra"
// //     }
// // });

// // const PersonData = new mongoose.model("personData",personInfo);

// module.exports = PersonData;


// Schema with using joi
const personInfo = joi.object({
    Name:joi.string().trim(),
    Id:joi.number(),
    City:joi.string()
});

const joiSchema = new mongoose.Schema(
    joigoose.convert(personInfo)
);


const PersonData = new mongoose.model("personData",joiSchema);

module.exports = PersonData;
