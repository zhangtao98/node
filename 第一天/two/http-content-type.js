//此文件主要讲述内容
//1.结合fs发送文件中的数据
//2.Content-Type
  //  查询表网址：http://tool.oschina.net/commons
  // 图片不需要指定编码，一般只为字符数据才制定编码。

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(req,res){
    var url = req.url;
    //肯定不能这样发送文本信息
   // res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>首页</title></head><body><h1>这是html文件</h1></body></html>')

   //接下来看发送文本的正确方式
   if(url === '/'){
        fs.readFile('./resource/index.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件已丢失');
            }else {
                //不能直接返回data，data默认是二进制数据，可以通过.toString转为咱们能识别的字符串
                //res.end() 支持两种数据类型，一种是二进制，另一种是字符串
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        })
   }else if(url === '/image'){
       //访问图片资源
       //url别名：统一资源定位符，一个url最终其实是要对应到一个资源的。
       fs.readFile('./resource/01.jpeg',function(err,data){
        if(err){
            res.setHeader('Content-Type','text/plain;charset=utf-8');
            res.end('文件已丢失');
        }else {
            //图片就不需要制定编码了，因为我们常说的编码一般指的是字符编码，这添加了charset=utf-8反而会出错

            res.setHeader('Content-Type','image/jpeg');
            res.end(data);
        }
       })
   }
  

})

server.listen(3000,function(){
    console.log('Server is running http://127.0.0.1:3000');
})