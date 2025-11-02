const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/login", async (req, res) => {

  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send("user saved successfully");
  } catch (error) {
    console.error(error)
   res.status(400).send("something went wrong")
  }

});

connectDB()
  .then(() => {
    console.log("database connected successfully");
    app.listen(3001, () => {
      console.log("http://localhost:3001/");
    });
  })
  .catch((err) => {
    console.log("Database is not connected");
  });
