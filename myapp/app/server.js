let http = require('http'); // built-in module
let url = require('url');

let math = require('./math');

// /pathname 
// ?queryparam

// http://localhost:3000/add?x=100&y=10
// http://localhost:3000/sub?x=100&y=10

let server = http.createServer( (request, response) => {
    // let pathname = url.parse(request.url).pathname;
    let pathname = url.URL(request.url).pathname
    let query = url.parse(request.url, true).query;
    if(pathname === "/add") {
        response.write(math.add(parseFloat(query["x"]), parseFloat(query["y"])).toString());
    } else if (pathname === "/sub") {
        response.write(math.sub(parseFloat(query["x"]), parseFloat(query["y"])).toString());
    }
    response.end();
});

server.listen(3000, () => console.log("server started"));


