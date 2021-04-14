const express = require('express');
const path = require('path');
const app=express();
app.use(express.static(path.join(__dirname,"/public")));
// app.get('/',(req,res)=>{
//     res.status(404).send("vishv is hear..");
// });
app.get('/home',(req,res)=>{
    res.send("home is hear..");
});
app.get('/index',(req,res)=>{
    res.send("index is hear..");
});
app.listen(8000,()=>{
    console.log("server is start now ..");
});