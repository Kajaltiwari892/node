const fs = require('fs');
const crypto = require('crypto');
// we can chnge the no. of threads in thread pool by setting env variable UV_THREADPOOL_SIZE

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2('password','salt',5000000,50,'sha512' , (err,key)=>{
 console.log('1 - crypto')
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - crypto")
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - crypto");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - crypto");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - crypto");
});

// the 4 crypto came parallely at same time but 5th came late bcz , 4 threads use mei the to uss time k liye 5th wla wait kr rha tha

// fs.readFile('thread.js','utf-8',(err,data)=>{
//     console.log('1 - fs')
// })