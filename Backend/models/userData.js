const mongoose = require('mongoose')

const newDataSchema = new mongoose.Schema({
    movieName : String,
    movieURl : String , 
    movieType : String , 
    movieRating : Number 

})

module.exports = mongoose.model('userData',newDataSchema)