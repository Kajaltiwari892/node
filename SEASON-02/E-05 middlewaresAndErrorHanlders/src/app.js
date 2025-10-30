const express = require("express");

const app = express();

const {authAdmin,userAdmin} = require("./middleware/auth")

// handle auth middleware for all request GET , POST ,etc
app.use("/admin", authAdmin);

app.get("/user/data",userAdmin, (req, res) => {
  res.send("USer Data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("all Data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User dleted");
});

app.listen(3001, () => {
  console.log("http://localhost:3001/");
});
// always try to write you logic in try or catch , best way to do .