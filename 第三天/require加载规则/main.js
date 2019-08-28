require('./a');
// 优先从缓存加载
// 由于a中已经加载过b了，
// 所以这里不会重复加载b
// 可以拿到其中的接口对象,但不会重复执行里面的代码，例如console.log("b 已经被执行了")。
//目的是为了避免重复加载




var fn = require('./b');

console.log(fn);