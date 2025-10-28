setImmediate(()=>console.log("setImmediate"));

setTimeout(() => {
  console.log('Timer expired')
}, 0);

fs.readFile("./file.txt","utf-8" ,()=>{
  setTimeout(()=>console.log("2nd Timer"),0);

  process.nextTick(()=> console.log("2nd nextTcik"));

  setImmediate(()=> console.log("2nd setImmediate"));

  console.log("File Reading CB")
});

process.nextTick(()=>console.log("nextTick"));

console.log("Last line of the file");

// OUTPUT: 
// lastline
// nextTcik
// promise
// Timer expired
// setImmediate
// File Reading CB
// 2nd nextTcik
// 2nd setImmediate
// 2nd Timer
