//读取目录
var http = require('http');
var fs = require('fs');

var server = http.createServer();

//创建要读取目录路径
var wwwDir = 'D:/wwwDir';

server.on('request',function(req,res){
    var url = req.url;
    console.log("已进入")
    fs.readFile('./template.html',function(err,data){
        console.log("开始读取文件");
        if (err) {
            return res.end('404 Not Found');
        }
        //实现过程中的疑问
        //1.如何得到wwwdir目录列表中的文件名和目录名
        //fs.readdir
        //2.如何将得到的文件名和目录名替换到template.html中
        //2.1在template.html中需要替换的位置预留一个特殊的标记（就像以前的模板引擎的标记）
        
        //只要做了这两件事儿，问题就解决了。
        fs.readdir(wwwDir,function (err,files) {
            console.log("开始读取文件目录");
            if (err) {
                console.log('读取失败');
                return res.end("Can't find www dir");
            }
            //2.2根据files生成需要的html内容
            var content = `<h1>${wwwDir}</h1>`;
            files.forEach(function(item){
                content += `
                <tr>
                    <td><a href="${wwwDir}/${item}">${item}</a></td>
                <tr/>
                `
            });
            //2.3替换
            var newData = data.toString();
            newData = newData.replace("@@",content);
            // newData.replace("@@",content);
            console.log("数据：",newData);
            //3.发送解析替换后的响应数据
            res.end(newData);
        })
        
    })
   
})

server.listen(3000,function(){
    console.log('server already running ...');
})