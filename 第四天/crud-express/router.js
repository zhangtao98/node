/* 
router.js 路由模块
职责：
处理路由
根据不同的请求方法+请求路径具体设置
*/
var fs = require('fs');
var express = require('express');

//调用操作数据文件模块的方法
var Student = require('./student.js');

//这样也不方便
// module.exports = function(app){
   
// }

//express 提供了一种更加便捷的操作
// 1.创建一个路由容器
var router = express.Router();

// 2.把路由都挂载到router路由器中
    //2.1 渲染首页
    router.get('/student',function(req,res){
        Student.findAllStudent(function(err,data){
            data.student.forEach(function(item){
                if(item.sex === '0'){
                    item.sex = '男'
                }else{
                    item.sex = '女'
                }
            })
            res.render('index.html',{
                student:data.student
            });
        })
        
    });

    //2.2渲染添加学生页面
    router.get('/student/new',function(req,res){
        res.render('addNew.html');
    })

    //2.3处理添加学生请求
    router.post('/student/new',function(req,res){
        Student.addStudent(req.body);
        res.redirect('/student');
    })

    //2.4渲染编辑页面
    router.get('/student/edit',function(req,res){
        var stuInfo = Student.findOneStudent(req.query.id,function(stuInfo){
           if(stuInfo.sex === '0'){
            stuInfo.sex = '男';
           }else{
            stuInfo.sex = '女';
           }
            res.render('edit.html',{
                student:stuInfo
            });
        });
        

    })

    //2.4处理编辑请求
    router.post('/student/edit',function(req,res){
        Student.updated(req.body);
         res.redirect('/student');
    })

    //2.5处理删除请求
    router.get('/student/delete',function(req,res){
        console.log(1);
        Student.deleted(req.query.id);
        res.redirect('/student');
    })

    //3.把router导出
    module.exports = router;