const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    uname:"",
    email:"",
    pass:""
})

const userModel=mongoose.model("lab",userSchema,"lab")

module.exports=userModel