import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true
    },phone:{
        type:String,
        require:true,
        unique:true
    }
})

let userModel= mongoose.model("myUsers",userSchema,"users")
//                             for dev , abv var,  colelction name

export default userModel 