const fs = require('fs'); 

let stream = fs.createReadStream("fs1.js"); // generally a very big file

stream.on("data", (chuck) => {
    console.log(chuck.toString()); // n number of times execute based on file size
});

stream.on("error", () => {
    console.log("Problem")
});

stream.on("end", () => {
    console.log("End!!!");
})