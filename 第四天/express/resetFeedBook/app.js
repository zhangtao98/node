// app Application 应用程序
//使用express重构留言本

var express = require('express');
var bodyParser = require('body-parser');
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
//创建服务对象
var app = express();
//开放静态资源
app.use('/public/',express.static('./public/'));

//配置使用art-template模板引擎
//第一个参数，表示当渲染以.art结尾的文件的时候，使用art-template模板引擎
//express-art-template是专门用来在express中把art-template整合到express中
//虽然外面这里不需要记载art-template但是也必须安装，原因在于express-art-template
//依赖了art-template

app.engine('html',require('express-art-template'));
//ExpressweiResponse响应对象提供了一个方法：render
// render方法默认是不可用的，但是如果配置了模板引擎就可以使用了。
//res.render('html模板名称'，{模板数据})
//第一个参数不能写路径，默认会去项目中的view目录查找模板文件
//也就是说Express有一个约定：开发人员把所有的视图文件都放到views目录中

//只要在这里配置，则在req请求对象上会多出来属性：body
    //这样就可以通过req.body获取到客户端发送的数据
    app.use(bodyParser.urlencoded({extended:false}))

    app.use(bodyParser.json())


app.get('/',function(req,res){
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post',function(req,res){
    res.render('post.html')
})

//当以post请求/post 的时候，执行指定的处理函数
//这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
app.post('/post',function(req,res){
    // 获取到的post数据
    // req.body
    req.body.dateTime =  _today.format('YYYY-MM-DD');
    comments.unshift(req.body);
    res.redirect('/');
})

app.get('/pinglun',function(req,res){
    req.query.dateTime =  _today.format('YYYY-MM-DD');
    comments.unshift(req.query);
    res.redirect('/');
    // res.statusCode = 302;
    // res.setHeader('Location','/');
    res.send();
})

//404页面，使用通配符，没有经过路由的所有页面默认由404页面接管
app.get('*',function(req,res){
    res.render('404.html');
})
app.listen(3000,function(){
    console.log('running...')
})
