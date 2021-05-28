const mongoose = require("mongoose")


const salepersonSchema =  mongoose.Schema({

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
    cnic:{
        type: Number,
        required: true
    },
    file_cv:{
        type: String
    }
})


const saleperson = mongoose.model("saleperson", salepersonSchema)
module.export = saleperson