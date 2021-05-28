const mongoose = require("mongoose")


const supplierSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        // required: true
    },
    whatappNum:{
        type: Number,
        // required: true
    },
    companyName:{
        type: String,
        // required: true
    },
    address:{
        type:String,
        // required: true
    }
})

const supplier = mongoose.model('supplier', supplierSchema)
module.exports = supplier