const fs = require('fs')
const a = 100;

setImmediate(()=>{console.log('setTimeout')});

fs.readFile("./file.txt","utf-8", ()=>{
  console.log("File Reading CB")
});

setTimeout(()=> console.log("Timer expired"), 0);

function printA(){
  console.log("a=",a)
}

printA();
console.log("LaSt line of hte code")

// OUTPUT:--->
// a= 100
// last line of the code
// Timer expired
// setTimeout
// File Reading CB