const mongosse = require('mongoose');


const dealSchema = new mongosse.Schema({
    discount:{
        type:Number,
        required:true   
    },
    category:{
        type:mongosse.Schema.Types.ObjectId,
        ref:'HomeCategory',
        required:true
    }
})


const Deal = mongosse.model('Deal',dealSchema)

module.exports = Deal
