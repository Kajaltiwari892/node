const express =  require('express');

const app = express();

// app.use  will run everytime when a request is made to the server , and if i write  any path here then it will run only for that path.
// app.use("/",(req,res)=>{
//  res.send('This is the HOME page')
// }); 

// app.use("/hi", (req, res) => {
//   res.send("hjsheddddjhesjdhf");
// }); 

//ab?c here b is optional if you don't write the route will even work , 
// ab+c means you can write as many as b
// ab*cd means  you can write anything in between it , it will run
//  '/a/' will run jaha v a ho
//  '/.*fly$/' will run on every route which ends with fly.
// app.get('/ab?c',(req,res)=>{
//   res.send("Data successfully saved to the database")
// })

// req.query is an object that contains all the query parameters sent by the client , here is URL after ?

// if there is http://localhost:3000/user/123 , then we have to do "/user/:userId" and do req.params
app.get('/user/:userId', (req,res)=>{
  console.log(req.params);
  res.send({firstName:"kajal"})
})


app.listen(3000 , ()=>{
  console.log("http://localhost:3000/");
});
