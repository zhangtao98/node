## 知识点

- express
    + 原生的http在某些方面表现不足以应对我们的开发需求，
        所以我们就需要使用框架来加快我们的开发效率，框架的目的
        就是提高效率。让我们的代码高度统一
    + 官网 [http://expressjs.com/]
- 基于文件做一套增删改查
- 解决代码写完自动重启问题
    + 我们可以使用第三方命令行工具：nodemon来帮我们解决频繁修改代码重启问题
    + nodemon是一个基于node.js开发的一个第三方命令行工具，我们使用的时候需要独立安装
    ```javascript
    npm install --global nodemon
    ```
    + 安装完毕后，使用：
    ```javascript
    node app.js
    # 使用nodemon
    nodemon app.js
    ```
    + 只要是nodemon启动的服务，它会监视文件变化，自动重启服务

- 在Express中配置使用art-template模板引擎
    + 安装
    ```shell
    npm install --save art-template
    npm install --save express-art-template
    ```
    + 配置
    ```javascript
    app.engine('html',require('express-art-template'));

    ```
    + 使用
    ```javascript
    app.get('/',function(req,res){
    res.render('index.html',{
        comments:comments
    })
})
    ```
    



    + 如果希望修改默认的views视图渲染存储目录
    ```javascript
    //注意第一个参数views千万不要写错
        app.set('view',目录路径)
    ```
- 在Express获取表单get请求体数据

    ```javascript
    app.get('/pinglun',function(req,res){
    req.query.dateTime =  _today.format('YYYY-MM-DD');
    comments.unshift(req.query);
    res.redirect('/');
    // res.statusCode = 302;
    // res.setHeader('Location','/');
    res.send();
    })

    ```

- 在Express获取表单post请求体数据
    + 在 express 中没有内置获取表单请求体的Api ，这里我们需要使用第三方包
    body-parser
    * 安装
    ```javascript
    npm install --save body-parser
    ```
    * 配置
    ```javascript
    //1.引包
    var bodyParser = require('body-parser');

    //2.配置body-parser
    //只要在这里配置，则在req请求对象上会多出来属性：body
    //这样就可以通过req.body获取到客户端发送的数据
    app.use(bodyParser.urlencoded({extended:false}))

    app.use(bodyParser.json())

    
    ```
    * 使用
    ```javascript
    app.use(function(req,res){
        res.setHeader('Content-Type','text/plain');
        res.write('you posted:\n')
        res.end(JSON.stringify(req.body,null,2))
    })
    ```
- crud 
    + 路由设计
        *










## 起步
    - 安装
    ```javascript
    npm install --save express
    ```
## 小知识
    - 文件操作中的相对路径可以省略 ./
        + 例如
        * fs.readFile('data/a.txt',function(){})
     - 在模块加载中，相对路径的./ 不能省略
     - 咱们所有的文件操作的APi都是异步的


## 上午总结
- 文件路径中的'/' 模块标识中的'/'
- nodemon
- express
    + art-template 模板引擎的配置
    + body-parser 解析表单post请求体
- 技术只是一种解决问题的手段，工具而已
    + 第三方的东西，不要纠结
    + 现已解决问题为主
- 详解了express静态服务API
    + app.use('/public/',express.static('public'))