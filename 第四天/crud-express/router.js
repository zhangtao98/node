/* 
router.js 路由模块
职责：
处理路由
根据不同的请求方法+请求路径具体设置
*/
var fs = require('fs');
var express = require('express');
//这样也不方便
// module.exports = function(app){
   
// }

//express 提供了一种更加便捷的操作
// 1.创建一个路由容器
var router = express.Router();

// 2.把路由都挂载到router路由器中
    router.get('/',function(req,res){
        //读取数据
        fs.readFile('./db.json',function(err,data){
            if(err){
                return res.status(500).send("Server err .");
            }
            data =JSON.parse(data.toString());
            res.render('index.html',{
                student:data.student
            });
        })
        
    });

    //3.把router导出
    module.exports = router;