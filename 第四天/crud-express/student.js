//操作数据文件模块
//专门对数据进行一些处理，不关心页面

var fs = require('fs');
//获取所有学生列表
var findAll = function(callBack){
    //读取数据
    fs.readFile('./db.json',function(err,data){
       if(err){
          return callBack(err);
       }
       data =JSON.parse(data.toString());
       
      callBack(null,data);
   })
}
exports.findAllStudent = findAll;

//获取单个学生信息
exports.findOneStudent = function(id,callback){
    findAll(function(err,data){
        var stuInfo = data.student.find(function(item){return item.id == id});
        callback(stuInfo);
    })
}

//添加学生
exports.addStudent = function(obj){
    findAll(function(err,data){
        if(err){
            return res.status(500).send('server error') ;
        }
        if(data.student.length===0){
            obj.id = 1;
        }else{
            obj.id = data.student[data.student.length - 1].id + 1;
        }
        data.student.push(obj);
        data = JSON.stringify(data);
        fs.writeFile('./db.json',data,function(err){
            if(err){
                return res.status(500).send('server error');
            }
        })
    })
}

//更新学生

exports.updated = function(obj){
    //读取文本数据
    console.log('obj',obj.id);
    findAll(function(err,data){
        if(err){
            res.status(500).send('server error.')
        }
        //由于获取到的id为字符串需转化为数字，后面会变成字符串拼接，就不会保持id唯一了
       obj.id = Number(obj.id);
        //覆盖需要更改的旧信息，
       data.student =  data.student.filter(function(item){ return item.id != obj.id});
       //添加新信息
       data.student.push(obj);
       //将数据转换成字符串 
       data = JSON.stringify(data);
        //写入文件中
       fs.writeFile('./db.json',data,function(err){
            if(err){
                return res.status(500).send('server error');
            }
        })

    })
}

//删除学生

exports.deleted = function(id){
    findAll(function(err,data){
        if(err){
            res.status(500).send('server error.')
        }
     //删除掉指定id的信息        
       data.student =  data.student.filter(function(item){ return item.id != id});
       data = JSON.stringify(data);
        //写入文件中
       fs.writeFile('./db.json',data,function(err){
            if(err){
                return res.status(500).send('server error');
            }
        })

    })
}