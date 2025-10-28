const fs = require('fs')
const a = 100;

setImmediate(()=>{console.log("setTimmediate")})

Promise.resolve().then(() => console.log("Promise"));


fs.readFile("./file.txt" ,"utf-8", ()=>{
  console.log("File Reading CB")
});

setTimeout(()=>console.log("Timer expired"), 0);

process.nextTick(()=>{console.log("process.nextTick")});

function printA(){
  console.log("a=" , a)
}
printA();
console.log("Last line of the file")

// OUTPUT: --- >
// a = 100
// Last lin of the file
// process.nextTick
// Promise
// Timer expired
// SetImmdediate
// file reading cb
