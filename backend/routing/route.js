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
});


myapp.get("/allusers", async (req,res)=>{
        const users = await myschema.find();
        res.send({msg:"all useer list",status:251,allusers:users});
});

myapp.delete("/deleteuser/:id", async (req,res)=>{
    const id = req.params.id;
    const removeu = await myschema.findByIdAndDelete({_id:id});
    res.send({msg:"delete user",status:255,allusers:removeu});
});

myapp.get("/singleuser/:id",async (req,res)=>{
        const id = req.params.id;
        const single = await myschema.findById({_id:id});
        res.send({singleuser:single});
});







module.exports = myapp;