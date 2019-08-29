var express = require('express');
var path = require('path');
//相当于同时绑定request请求
var app = express();
//接收来自服务器的get请求
//静态文件服务
//当省略第一个参数的时候，则可以通过在路由中省略/public,直接访问public的资源
 app.use(express.static('public'));
//app.use(express.static('files'));
//第一个参数表示别名，路径中必须带有这个别名才能访问public文件
//app.use('/static/',express.static('public'));
//app.use('/static/',express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
    //原来的方式依然可以用，但是推介使用send（）
    res.send('hello worlds')
})

//开启端口服务
app.listen(3000,function(){
    console.log('express app is running...')
})
