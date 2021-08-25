// example to illustrate threads of libuv
let crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2("Welcome123", "secret123", 10000, 512, "sha512", (pwd) => {
    console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("Welcome123", "secret123", 10000, 512, "sha512", (pwd) => {
    console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("Welcome123", "secret123", 10000, 512, "sha512", (pwd) => {
    console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("Welcome123", "secret123", 10000, 512, "sha512", (pwd) => {
    console.log("4: ", Date.now() - start);
});

 