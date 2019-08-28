// app Application 应用程序

// 为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在public目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制

var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');
var moment = require('moment');
moment.locale('zh-cn');
var _today = moment();
//接下来是创建服务的简写方式

var comments = [
    {
        name:"战三",
        message:'今天学到了好多',
        dateTime:"2019-08-27"
    },
    {
        name:"战三",
        message:'今天学到了好多',
        dateTime:"2019-08-27"
    },
    {
        name:"战三",
        message:'今天学到了好多',
        dateTime:"2019-08-27"
    },
    {
        name:"战三",
        message:'今天学到了好多',
        dateTime:"2019-08-27"
    },
    {
        name:"战三",
        message:'今天学到了好多',
        dateTime:"2019-08-27"
    },
]
http.createServer(function(req,res){
    //使用url.parse 方法将路径解析为一个方便操作的对象，第二个参数为true表示直接转换成对象
    
    var obj = url.parse(req.url,true);
    //单独获取不包含查询字符串的路径部分（该路径不包含？之后的内容）
    var objPath = obj.pathname;

    if (objPath==='/') {
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                res.end('404 Not Found.');
            }
         data = template.render(data.toString(),{
                comments:comments
            });
            res.end(data);
        })
    } else if (objPath === '/post') {
        fs.readFile('./views/post.html',function(err,data){
            if(err){
                res.end('404 Not Found.');
            }
            res.end(data);
        })
    }else if (objPath=== '/pinglun') {
//这时候无论我们得到的路径是比如‘/pinglun?xxxxxx’之后是什么，我们都不用担心了，因为我的
    //objPath是不包含？后面的路径的。
        var canshu = obj.query;
        console.log("canshu",canshu.name);
        var newPinglun = {};
        newPinglun.name = canshu.name;
        newPinglun.message = canshu.message;
        newPinglun.dateTime = _today.format('YYYY-MM-DD');
        console.log("newPinglun",newPinglun);
        comments.unshift(newPinglun);
        //如何通过服务器让客户重定向
        //1.状态码设置为302临时重对象
       // statusCode
        //2.在响应头中通过Location告诉客户端往哪重定向
        // setHeader
        //如果客户端发现收到服务器的响应的状态码是302就会自动去响应头中找Location
        //所以你就能看到客户端自动跳转了
       
        //设置重定向
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    } else if(objPath.indexOf('/public/') === 0){
        // /public/css/main.css
        // /public/js/main.js
        //...
        //统一处理：
        //如果路径是以/public/开头，则我认为你要获取public 中的某个资源
        //所以我们就直接可以把请求路径当做文件路径来直接进行读取
        fs.readFile('.'+objPath,function(err,data){
            if(err){
                res.end('404 Not Found.');
            }
            res.end(data);
        })
    }else{
        //如果没有匹配的路径则返回404页面
        fs.readFile('./views/404.html',function(err,data){
            if(err){
                res.end('404 Not Found.');
            }
            res.end(data);
        })
    }
}).listen(3000,function(){
    console.log("running...")
})