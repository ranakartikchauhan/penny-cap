const express = require('express');

const app = express();
const path = __dirname + '/views/';
app.use(express.static(path));
app.use('/uploads',express.static('uploads'));
const dotenv =require("dotenv")
dotenv.config({path:'./config.env'});
require('../db/conn')
app.use(express.json());

app.use(require('../router/auth'))
app.get("/",(req,res)=>{
   res.sendFile(reactpath)

    console.log(reactpath)
})

app.get("/contact",(req,res)=>{
    res.cookie("Test",'thapa');
    res.send("Hello contact");
})

app.get("/signin",(req,res)=>{
    res.send("Hello sign in world");
})

app.get("/signup",(req,res)=>{
    res.send("Hello Registration world");
})


app.listen(7000,()=>{
    console.log(`App is running on 7000 `);
})