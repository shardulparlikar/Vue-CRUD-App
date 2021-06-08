const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dataRoutes = require('./Routes/dataRoutes')
const cors=require("cors")

const app =express()













// mongoD connection

const url = "mongodb+srv://Shardul:123@cluster0.scrsx.mongodb.net/MevnApllication?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser: true ,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongo connected")
})
.catch(err=>console.log(err))

app.use(cors())
app.use(bodyParser.json())

//Routes 



app.use('/',dataRoutes);


app.listen(3000,()=>{
    console.log("Server on 3000")
})
