var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(req,res){
    var url = req.url;

})

server.listen(3000,function(){
    console.log("server already starting to http://127.0.0.1:3000");
})