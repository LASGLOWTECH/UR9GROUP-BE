


const express = require("express");
const app= express()
const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();
const config=require('./config')

const ur9blogs= require("./routes/Blog");

const cors= require('cors');

const {port, blog_url, allowedDomains}=config



app.use(
	cors(({origin: allowedDomains, credentials:true})));


app.use(express.json())
// middle ware  what it does is that any request that comes in it looks if it has some body to the request
const URL=blog_url



console.log(URL);


app.use((req, res, next)=>{
   
    console.log(req.path, req.method)
    next()
})


// routes

app.use('/api/Blog', ur9blogs)
// connect Data base
const path=require('path');
const { createRequire } = require("module");
app.use(express.static(path.resolve(__dirname, "build")));



app.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "build", "index.html" ))
     
})


mongoose.connect(URL)
.then(()=>{
// listen for request only if data base is connected


app.listen(port, ()=>{
    console.log("connected to Db server listening on port ", port);
})


})

.catch((error)=>{
    console.log(error)
})
