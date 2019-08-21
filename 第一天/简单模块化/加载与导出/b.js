var bFoo = "b变量";
var bFoo2 = 'bFoo2不暴露出去';
var bFn = function(a,b){
    return a+b;
}

exports.bFoo = bFoo;
exports.bFn=bFn;