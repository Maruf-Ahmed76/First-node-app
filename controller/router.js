var rander = require("../model/randere");
var url = require("url");
var commonHeader = {"Content-Type" : "text/html"};
// Creating home router
function home(req,res){
    if(req.url === "/"){
        
        res.writeHeader(200,commonHeader);
        rander.vew("header",{"page" : "Home"},res);
        rander.vew("search",{},res);
        rander.vew("footer",{},res);
        res.end();
    }
}
// Creating user page route
function user(req,res){
    var username = req.url.replace("/","");
    if(username.length > 0){
        res.writeHeader(200,commonHeader);
        rander.vew("header",{"page" : "User - " + username},res);
        rander.vew("user",{username},res);
        rander.vew("footer",{},res);
        res.end();
    }
}

module.exports.home = home;
module.exports.user = user;