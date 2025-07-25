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


myapp.post("/userlogin", async (req,res)=>{
        const {email, pass} = req.body;
        if(email=="" || pass=="")
        {
            res.send({msg:"email and password are med",status:440});
        }
        else
        {
            const loginuser = await myschema.findOne({email:email}); 
                console.log(loginuser);    
            if(loginuser)
                {
                    if(loginuser.email==email && loginuser.pass==pass)
                    {
                         res.send({msg:"login successfully",status:270});
                    }
                }
                else
                {
                    res.send({msg:"email not match",status:420});
                }
        }

})



myapp.patch("/edituser/:id", async(req,res)=>{
    const id = req.params.id;
        const useredit = await myschema.findByIdAndUpdate(id,req.body,{new:true});
        res.send({msg:"user updated",status:250,userdata:useredit});
})





module.exports = myapp;