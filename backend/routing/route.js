const express = require('express');
const myapp = express.Router();
const myschema = require('../schematype/dataschema');

myapp.get("/", (req,res)=>{
    res.send("this is my defaut api for try");
});

myapp.get("/about" ,(req,res)=>{
    res.send("this is about page");
});

myapp.post("/userregistor",async (req,res)=>{
    const {fullname,email,phone,dob,pass,gender} = req.body;
    const registordata = await myschema({fullname,email,phone,dob,pass,gender}).save();
    res.send({msg:"registor successfully",status:221,data:registordata});
})




module.exports = myapp;