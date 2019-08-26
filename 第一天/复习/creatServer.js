//加载核心模块
var http = require('http');

//创建一个服务器实例
var  server = http.createServer();


//接收客户端请求
server.on('request',function(request,response){
    var url = request.url;
    //判断客户端请求的路径
    if(url === '/'){
        //响应客户端请求
        response.write("hello young boy")
    }else{
        response.write("hello beautiful girl")
    }
    //结束响应
    response.end(" 响应结束");
})

//绑定端口号开启服务
server.listen(3000,function(){
    console.log("服务器开启成功，可通过http://127.0.0.1:3000/地址访问");
})