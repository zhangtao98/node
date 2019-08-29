var express = require('express');
var  bodyParser = require('body-parser');
var app = express();
//开放静态资源
app.use('/public/',express.static('public'));
app.use(express.static('node_modules'));

//为获取post请求的参数而准备
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
res.send('hello crud-express!');
});

app.listen(3000,function(){
    console.log('server running http://127.0.0.1:3000');
})