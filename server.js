const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require("body-parser");

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})
app.get('/',(req,res)=>{
    
    
})


app.listen(3000,function(){
    console.log("scp online!")
})
