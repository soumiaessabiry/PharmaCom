import express from "express";
const app=express()
app.use("/",(req,res)=>{
    res.send("heloo pharmacom")

})


app.listen(8000,()=>{
    console.log("server run on port")
});