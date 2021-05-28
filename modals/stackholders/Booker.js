const mongoose = requre("mongoose")

const bookSchema =  mongoose.Schema({
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
    }
})

const booker = mongoose.model("booker",bookSchema)
module.exports = booker;