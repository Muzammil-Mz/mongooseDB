import express from "express";
import userModel from "../../models/Users/Users.js";

const router=express.Router()
router.get("/getallusers",(req,res)=>{
    try {
        console.log("get all users");
        res.status(200).json({msg:"get all users"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.post("/register",async  (req,res)=>{
    try {
        let userData=req.body
        console.log(userData);
        await userModel.create(userData)
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router