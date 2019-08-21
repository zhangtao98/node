//创建webServer服务器
//在Node中专门提供了一个核心模块：http
//http:帮助创建编写服务器。

//1.加载http核心模块
var http = require('http');

//2.使用 http.createServer()方法创建一个web服务器
//返回一个server实例
var server = http.createServer();

//3.服务器要干嘛？
//  提供服务，对数据的服务
// 发请求
// 当客户端发送请求过来，自动触发服务器的request请求事件，然后执行第二个参数：回调函数
//回调函数参数：
// Request：请求对象
    //请求对象可以用来获取客户的一些请求信息，例如请求路径
// Response:响应对象
    //相应对象可以用来给客户发送响应消息
server.on('request',function(request,response){
    console.log("收到客户端请求了,请求地址为："+request.url);
    //response对象有一个方法：write  可以用来给客户端发送响应数据
    //write方法可以多次使用，但是最后必须使用end方法结束响应，
    //否则客户端会一直等待响应
    var req = request.url;
    if(req === '/'){
        response.write("hello world");
    }else if(req === "/index"){
        response.write("欢迎来到首页");
    }else if(req === "/login"){
        response.write("欢迎来到登录页面");
    }else if(req === "/register"){
        response.write("欢迎来到注册页面");
    }
    
    response.end()
});

//

//4.绑定端口号，启动服务器，启动成功会执行后面的回调函数
server.listen(3000,function(){
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/ 进行访问")
});