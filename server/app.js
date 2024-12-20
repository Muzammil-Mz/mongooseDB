import express from "express"
import config from "config"
import "./utils/dbConnect.js"

import userRouter from "./controllers/users/index.js"
import adminRouter from "./controllers/admins/index.js"
import staffRouter from "./controllers/staff/index.js"



const app=express()
const port=config.get("PORT")

app.use(express.json())

app.get("/api",(req,res)=>{
try {
    res.status(200).json({msg:"hello world"})

} catch (error) {
    console.log(error);
    
}})

app.use ("/api/users",userRouter)
app.use("/api/admins",adminRouter)
app.use("/api/staff",staffRouter)

app.listen(port,()=>{
    console.log(`Server is up and listening ${port}`);
})