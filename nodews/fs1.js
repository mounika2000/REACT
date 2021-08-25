const fs = require('fs'); // like import "fs" module ==> built-in module

let data = fs.readFileSync("fs1.js"); // blocking api ==> to read configuration file

console.log(data.toString());

