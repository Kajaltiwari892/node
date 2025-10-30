const express = require("express");

const app = express();

app.get("/getUserData",(req,res)=>{
  throw new Error('kjhfgdsdf')
  res.send("User Data sent")
});

// err should be first , next should be in the 4th position
app.use("/",(err,req,res,next)=>{
 if(err){
  res.status(500).send("somethind went wrong");
 }
});

app.listen(3001, () => {
  console.log("http://localhost:3001/");
});

