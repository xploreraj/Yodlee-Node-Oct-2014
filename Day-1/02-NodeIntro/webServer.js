var http = require("http"),
    fs = require("fs"),
    path = require("path");

var onConnection = function(req,res){
    var filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
    fs.exists(filePath, function(exists){
        if (!exists){
            res.statusCode = 404;
            res.end();
        } else {
            fs.createReadStream(filePath, {encoding : "utf8"}).pipe(res);
        }
    });
}
var server = http.createServer(onConnection);
server.listen(8080);
console.log("server listening on port 8080");

/calculator?operation=add&number1=100&number=200