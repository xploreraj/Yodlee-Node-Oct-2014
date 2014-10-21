var fs = require("fs");
fs.readFile("./lorem.txt", {encoding :"utf8"}, function(err,data){
    if (err) throw err;
    console.log(data);
});