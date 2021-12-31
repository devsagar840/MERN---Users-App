const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
const userModel=require("./model/user")
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/dev").then(()=>console.log("connected"))

app.post("/reg",async(req,res)=>{
    const user=req.body;
   await  userModel.create(user)
    return res.json({data:"register"})
})
app.get("/list",async(req,res)=>{
   const us= await userModel.find()
   return res.json({data:us})
})
app.post("/log",async(req,res)=>{
    const user=req.body;
    
    
    
        const us=await userModel.find(user)
         return res.json({data:us})
   
   

})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
