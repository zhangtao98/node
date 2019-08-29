#第三天

##知识点

- 模块系统
 + 核心模块
 + 第三方模块
 + 自己写的模块
 + 什么是模块化
    * 文件作用域
    * 通信规则
        加载require
        导出 exports
 + CommonJS模块规范
    * 在node中的JavaScript还有一个很重要的概念，模块系统
        模块作用域
        使用require方法来加载模块
        使用exports接口来到处模块中的成员
    * 加载require
        语法：
        ```javascript
        var 自定义变量名称 = require('模块')
        ```
        两个作用：
            1. 执行被加载模块中的代码
            2. 得到被加载模块中的exports导出接口对象
    * 导出exports
        1. node中是模块作用域，默认文件中所有的成员只在当前文件模块中有效
        2. 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员都挂载到
            exports接口对象中就可以了。
        3. 导出多个成员（必须在对象中）：
            ```javascript
            exports.a =123
            exports.b = 'hello'
            exports.c = fn
            exports.d = {}
            ```
        4. 导出单个成员（拿到的就是：函数，字符串）：
            ```javascript
            module.exports = 'hello'
            ```
            以下情况会覆盖
            ```javascript
            module.exports = 'hello'
            //以这个为准，后者会覆盖前者
            module.exports = function (){}
            ```
        5. 原理解析
            exports是module.exports的一个引用
            ```javascript
            console.log(exports === module.exports)//true
            exports.foo = 'bar'
            //等价于
            module.exports.foo = 'bar'
            ```
            谁来require我，谁就得到module.exports,最后return的是module.exports不是exports
            所以给exports重新赋值不管用例如
            ```javascript
            exports = 'hello' //这就是重新赋值了，不可以这样。
            module.exports ='hello' //这样是可以的，因为最终return的是module.exports
            exports.a = 'world' //这里又不能导出了，因为上一行代码module.exports重新赋值了，module.exports===exports 不成立了。
            ```
- require 加载
    + 优先从缓存加载
    + 模块标识符分析
- npm
    + package.json
      * 包描述文件，就像产品的说明书一样
      * 这个文件可以通过npm install 的方式来自动初始化
      * 建议执行npm install 包名的时候都加上 --save 这个选项，目的是用来保存依赖项信息
      * 如果你的node_modules删除了也不用担心，我们只需要：`npm install` 就会自动把package.json
        中的`dependencies`中所有的依赖项都下载回来
- package.json
- Express
    + 第三方web开发框架
    + 高度封装了http模块
    + 更加专注于业务，而非底层细节
    + 做到知其所以然
- 增删改查案例
    + 使用文件来保存数据（锻炼异步编码能力） 
- MongDB

- jquery的知识点
    + 伪数组是对象,例如使用jquery获取到所有的div，组成的数组，就是一个伪数组。
    + 对象的原型链中没有forEach
    + 对象的原型链是Object.prototype
    + jquery 的each方法不是专门用来遍历jquery元素的。
        * 1.方便的遍历jQuery元素
        * 2.可以在不兼容forEach的低版本浏览器中使用jQuery的each方法


## 上午总结
- jQuery的 each 和 原生js的 forEach 
    + EcmaScript 5 提供的
        * 不兼容IE8
    + jQuery 的 each 由 jQuery第三方库提供
        * jQuery2以下的版本是兼容IE8 的
        * 它的each方法主要用来遍历jQuery对象（伪数组）
        * 同时它也可以作为低版本浏览器中forEach替代品
        * jQuery 的实例对象不能使用forEach方法，如果想要使用必须转为组数才可以使用
        * 例如 `[].slice.call(jQuery实例对象)`
- 模块中导出多个成员和导出单个成员
- 301 和 302 状态码的区别
    + 301 永久重定向   
    + 302 暂时重定向
- exports 和 module.exports 的区别


