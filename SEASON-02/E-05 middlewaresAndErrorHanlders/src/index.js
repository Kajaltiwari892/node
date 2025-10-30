const express = require("express");

const app = express();

// ek route se ek hi res jaega isiye only response will print , not 2nd response...
app.get(
  "/user",
  (req, res ,next) => {
    // Route handler 1
    console.log("Hanlding the route user!!");
    res.send("Response!!");
    next();
  },
  (req,res,next) => {
    // Route handler 2
    console.log("handling rhe route user 2");
    // res.send("2nd response");
    next()
  },
  (req,res,next) => {
    // Route handler 2
    console.log("handling rhe route user 3");
    // res.send("3rd response");
    next()
  },
  (req,res,next) => {
    // Route handler 2
    console.log("handling rhe route user 4");
    // res.send("4th response");
  },

);

app.get('/user',(req,res)=>{
  res.send("newnd route handler")
})

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
