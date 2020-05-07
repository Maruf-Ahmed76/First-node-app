const Profile = require("./profile.js");
const randerer = require("./randerer");
const queryString = require('querystring');

// common header type
var commonHeader = {"Content-Type" : "text/html"};

// Creating home router
function home(req,res){
    if(req.url === "/"){
        if(req.method.toLowerCase() == "get"){
            res.writeHead(200,commonHeader);
            randerer.vew("header",{},res);
            randerer.vew("search",{},res);
            randerer.vew("footer",{},res);
            res.end();
        }else{
            req.on('data', postBody => {
                let query = queryString.parse(postBody.toString());
                res.writeHead(303,{"Location":`/${query.username}`});
                res.end();
            })
        }
        
    }
}
// Creating user page route
function user(req,res){
    // Get username from the URL
    var username = req.url.replace("/","");
    if(username.length > 0){
        // gte JSON from treehouse
        var studentProfile = new Profile(username);
        studentProfile.on("end", function(profileJSON){
            //Show profile

            // Store data
            var values = {
                avatarUrl : profileJSON.gravatar_url,
                username : profileJSON.profile_name,
                badges : profileJSON.badges.length,
                javascriptPoints : profileJSON.points.JavaScript
            }

            // Sample response
            res.writeHead(200,commonHeader);
            randerer.vew("header",{},res);
            randerer.vew("profile",values,res);
            randerer.vew("footer",{},res);
            res.end();
        });
        // error handaling
        studentProfile.on("error", function(error){
            // Show error

            // Sample response
            res.writeHead(200,commonHeader);
            randerer.vew("header",{},res);
            randerer.vew("error",{errorMessage:error.message},res);
            randerer.vew("search",{},res);
            randerer.vew("footer",{},res);
            res.end();
        });
    }
}

module.exports.home = home;
module.exports.user = user;