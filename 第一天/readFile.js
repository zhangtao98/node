//读取文件学习
//浏览器中的JavaScript是没有文件操作的能力的
//但是node中的 JavaScript具有文件操作的能力

//fs是 file-system的简写，就是文件系统的意思
//在node中如果想要进行文件操作，就必须要引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API来操作文档
//例如：fs.readFile就是用来读取文件的。

//1.使用require方法 加载fs核心模块
var fs = require('fs');

//2.读取文件
//第一个参数：读取的文件目录
//第二个参数，回调函数
//回调函数内有两个参数：data，error
// 成功：data:数据，error：null；
// 失败：data:null ，error：错误对象；
fs.readFile('./readme.md',function(error,data){
    //<Buffer e4 b8 8b e5 ae 9a e5 86 b3 e5 bf 83 e5 ad a6 e4 b9 a0 6e 6f 64 65 e7 ac ac e4 b8 80 e5 a4 a9>
    //文件中存储的其实是二进制数据01
    //这里为什么看到的不是0和1呢？原因是二进制转为16进制了
    //但是无论是二进制还是16进制，我们都不认识
    //所以我们可以通过toString方法把其转化为我们能认识的字符
    console.log(data);
    //<Buffer e4 b8 8b e5 ae 9a e5 86 b3 e5 bf 83 e5 ad a6 e4 b9 a0 6e 6f 64 65 e7 ac ac e4 b8 80 e5 a4 a9>
    let changeData = data.toString();
    console.log(changeData);//下定决心学习node第一天
});