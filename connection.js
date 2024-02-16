const mongoose =require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mongobtutoriallearning2024').then(()=>{
    console.log("connetion succesfull")
}).catch((e)=>{
    console.log(e)
})

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
}) 


const usermodel = new mongoose.model("usercollection",userschema);

module.exports =usermodel;