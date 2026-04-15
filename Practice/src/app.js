const express = require('express')
const connectDb = require('./config/database')
const User = require("./models/user")

const app = express()

app.post('/signup',async (req,res)=>{
    const user = new User (req.body)

    try {
        await user.save()
        res.send("User added successfully")
    } catch (error) {
        res.status(400).send("user not added" + error)
    }
})


connectDb()
    .then(() => {
        console.log("db connected Successfully")
        app.listen(3000, () => {
            console.log("server started on port: http://localhost:3000/")
        })
    }).catch(() => {
        console.log("db not connected" + err)
    }
    )

