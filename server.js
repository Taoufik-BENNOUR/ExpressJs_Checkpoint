const express = require('express');
const fs = require('fs')
const path= require ("path");
const time = require('./middleware')



const app = express()
app.use(express.json())
// app.use(HNO)

const port = 8000;


app.use('/',time,express.static(path.join(__dirname,"public")))

app.get('/home',time,(req,res)=>{
    try {
        res.sendFile(__dirname+"/public/Homepage.html")
        res.status(201)
        
    } catch (error) {
        res.status(401).json({errors:error})
        
    }
})
app.get('/service',time,(req,res)=>{
    try {
        res.sendFile(__dirname+"/public/OurServices.html")
        res.status(201)
        
    } catch (error) {
        res.status(401).json({errors:error})
        
    }
})
app.get('/contact',time,(req,res)=>{
    try {
        res.sendFile(__dirname+"/public/contactus.html")
        res.status(201)
        
    } catch (error) {
        res.status(401).json({errors:error})
        
    }
})





//listen
app.listen(port,(err)=>{
    err? console.log('server connection failed',err):console.log('server connected' + port)
})