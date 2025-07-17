const express = require('express');
const myapp = express.Router();
const myschema = require('../schematype/dataschema');

myapp.get("/", (req,res)=>{
    res.send("this is my defaut api for try");
});

myapp.get("/about" ,(req,res)=>{
    res.send("this is about page");
})

module.exports = myapp;