//读取目录
var http = require('http');
var fs = require('fs');
var template = require('art-template');

var server = http.createServer();

var wwwDir = 'D:/wwwDir';

server.on('request',function(req,res){
    var url = req.url;
    console.log("已进入")
    fs.readFile('./template-Apache.html',function(err,data){
        console.log("开始读取文件");
        if (err) {
            return res.end('404 Not Found');
        }
      //这里只需要使用模板引擎解析替换data中的模板字符串就可以了
           //数据就是files
           //然后去你的template.html 文件中编写你的模板语法就可以了。
          
      
     
        fs.readdir(wwwDir,function (err,files) {
            if (err) {
                return res.end("Can't find www dir");
            }
            data = template.render(data.toString(),{
                title:"主题",
                files:files,
                wwwDir:wwwDir
            });
            res.end(data);
        })
        
    })
   
})

server.listen(3000,function(){
    console.log('server already running ...');
})