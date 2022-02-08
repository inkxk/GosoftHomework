var http = require("http");
const date = new Date();
let time = date.toLocaleTimeString();
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Potcharapol Nokyoo | ${time}`);
}).listen(2337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:2337/");
