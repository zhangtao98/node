require('模块标识')
//路径形式的模块
// ./  ../  常用  
// /xxx 几乎不用
// d:/a/foo.js 几乎不用
//  首位的 / 在这里表示的是当前文件模块所属磁盘根路径


//核心模块的本质也是文件
//核心文件已经被编译到二进制文件中了，我们只需要按照文件名字加载就可以了
//例如
var fs = require('fs');

//第三方模块
// 凡是第三方模块都必须通过npm来下载
// 使用的时候就可以通过require（'包名'）的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块，也不是路径形式的模块
//     先找到当前文件下的node_modules目录
//     node_module/art-template
//     node_module/art-template/package.json文件
//     node_module/art-template/package.json文件中的main属性
//     main属性中就记录了art- template的入口模块
//     然后加载使用这个第三方包
//     实际上最终加载的还是文件
// art-template 是一个第三方包 只是举个例子

// 如果package.json 文件不存在或者main指定的入口模块也是没有
// 则node会自动找到该目录下的index.js
// 也就是说index.js 会作为一个默认备选项

// 如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules目录查找
// 规则如上，如果还没有，则继续往上上一级查找
// 。。。
// 如果直到当前磁盘根目录还找不到，最后报错：
// can not find module xxx

var template = require('art-template');
