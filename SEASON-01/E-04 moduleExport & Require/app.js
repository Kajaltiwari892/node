require("./xyz.js");
const { x, calculateSum } = require("./xyz.js");
const multiply = require("./multiply.js")
const data = require('./data.json')

console.log(JSON.stringify(data));

var name = "KAALS";
var a = 10;
var b = 99;
calculateSum(a, b);
multiply(3,4)
console.log(x);
console.log(a, name);
