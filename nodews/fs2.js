const fs = require('fs'); // like import "fs" module ==> built-in module

let data = "";

fs.readFile("fs1.js",(err, content) => {
    data = content.toString();
    console.log(data);
}); // non-blocking api

console.log("Done!!!");

