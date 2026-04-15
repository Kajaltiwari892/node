const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 15
    },
    
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email address:" + value)
            }
        }
    },
    password:{
        type:String,
       required:true
    }
})

module.exports = mongoose.model("User", userSchema)