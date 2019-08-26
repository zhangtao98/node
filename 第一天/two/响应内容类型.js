//响应内容文件类型Content-type

//在服务器端默认发送的数据，其实是utf8编码的内容，但是浏览器不知道你是utf8内容
//浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
//中文操作系统的默认编码格式是gbk

//解决方法：正确告诉浏览器服务器使用的是什么编码格式

var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
    //告诉客户端编码格式
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    //在http协议中，content-Type就是用来告知对方我给你发送的内容是什么类型。
    //text/plain :翻译普通文本
    //text/html:翻译html文本
    //charset=utf-8:按照utf-8格式编译
    res.end("可以正常显示了吧！")
})

server.listen(3000,function(){
    console.log("服务器已经运行于127.0.0.1:3000");
})
