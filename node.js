var http = require("http");
// var url = require("url");
// var file = require("fs");
// var up = require("upper-case");
var router = require("./controller/router");
// Creating http server
http.createServer(function (req,res){
    router.home(req,res);
    router.user(req,res);
}).listen(8080);