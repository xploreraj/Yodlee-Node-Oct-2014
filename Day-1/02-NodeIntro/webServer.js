var http = require("http"),
    fs = require("fs"),
    path = require("path");

var onConnection = function(req,res){
    var filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
    console.log(filePath);
    fs.exists(filePath, function(exists){
        console.log(exists);
        if (!exists){
            res.statusCode = 404;
            res.end();
        } else {
            var stream = fs.createReadStream(filePath, {encoding : "utf8"});
            stream.pipe(res);
        }
    });
}
var server = http.createServer(onConnection);
server.listen(8080);
console.log("server listening on port 8080");