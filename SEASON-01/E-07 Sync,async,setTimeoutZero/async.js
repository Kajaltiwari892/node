const crypto = require("crypto");

console.log("script start");

var a = 124;
var b = 456;

// password base key derivative function
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, key) => {
  console.log("Password encrypted");
});

setTimeout(() => {
  console.log("setTimeout THREE SECONDSSSSSSSSS>>>>");
}, 3000);
setTimeout(() => {
  console.log("setTimeout ZERO");
}, 0);

function multiply(a, b) {
  return a * b;
}
console.log(multiply(a, b));

// Executiion series:
// script start
// 56544
// setTimeout ZERO
// Password encrypted
// setTimeout THREE SECONDSSSSSSSSS>>>>