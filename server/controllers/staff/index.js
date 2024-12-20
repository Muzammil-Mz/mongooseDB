import express from "express";
import mongoose from "mongoose";

const router=express.Router()
router.get("/getallstaff",(req,res)=>{
    try {
        console.log("get all staff");
        res.status(200).json({msg:"get all staff"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})
//taking responce from user 
router.post("/registerstaff",async (req,res)=>{
    try {
        let userData=req.body
        console.log(userData);
        await mongoose.create(userData)
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router