const express = require('express');

const app = express();
const path = require('path')
app.use(express.static('src/views'));
app.use('/uploads',express.static('uploads'));
const dotenv =require("dotenv")
dotenv.config({path:'./config.env'});
require('./db/conn')
app.use(express.json());
app.use(require('./router/auth'))



app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/src/views/index.html')
    
})


app.listen(7000,()=>{
    console.log(`App is running on 7000 `);
})