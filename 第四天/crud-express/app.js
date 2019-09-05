 /*    app.js : 入口模块
    职责：
    创建服务
    做一些服务相关配置
    模板引擎
    body-parser解析表单post请求体
    提供静态资源服务
    挂载路由
    监听端口启动服务
 */

var express = require('express');
var bodyParser = require('body-parser');

//导入路由,为了模块化代码，方便维护
var router = require('./router');

var app = express();
//开放静态资源
app.use('/public/',express.static('public'));
app.use('/node_modules/',express.static('node_modules'));

//为获取post请求的参数而准备
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//配置模板引擎
app.engine('html',require('express-art-template'));

//配置bodyParser 一定要zai app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//把路由容器挂载到app服务中
app.use(router);

app.listen(3000,function(){
    console.log('server running http://127.0.0.1:3000');
})
