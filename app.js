var http = require("http");
var router = require("./router");

const port = 8080;
const hostName = 'localhost';
// Creating http server
http.createServer(function (req,res){
    if (req.url === '/img/favicon-16x16.png') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        return;
    }
    router.home(req,res);
    router.user(req,res);
}).listen(8080,"localhost");