const mongoose = require('mongoose')


const shopkeeperSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    whatAppNum:{
        type: Number
    },
    companName:{
        type: String
    },
    address:{
        type: String
    }


})

const shopkeeper = mongoose.model('shopkeeper',shopkeeperSchema)
module.exports = shopkeeper;