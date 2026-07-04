const mongoose = require('mongoose');
const HomeCategoryStatus = require('../domian/homeCategoryStatus')
 
const homeCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    section:{
        type:String,
        enum:Object.values(HomeCategoryStatus),
        required:true
    }
})

const HomeCategory = mongoose.model('HomeCategory',homeCategorySchema)
module.exports = HomeCategory
