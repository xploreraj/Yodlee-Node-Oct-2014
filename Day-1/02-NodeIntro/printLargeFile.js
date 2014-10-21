var fs = require("fs");
var readStream = fs.createReadStream("./largeLorem.txt", {encoding : "utf8"});
var readCount = 0;
readStream.on("data", function(data){
    ++readCount;
  console.log(data);
});
readStream.on("end", function(){
    console.log("========================================");
    console.log("thats all folks - ", readCount , " read counts");
});
