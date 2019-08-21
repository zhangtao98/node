//require是一个方法
//它的作用是用来加载模块的,但是在node中的模块有三种：
    //具名的核心模块，例如http、fs
    //用户自己编写的文件模块
console.log("start a");
    require('./b.js');  //加载自己写的另一个js文件
    // ./不能省略，但可以省略后缀名。
console.log("end a");


