var  mult = function(){
    console.log('开始计算成绩')
    var a = 1;
    for (var i=0,l=arguments.length;i<l;i++){
        a = a * arguments[i]
        console.log('a', a)
    }
    return a
}

var b = mult(2, 3)
var c =mult(2,3,4)

var proxyMult = (function () {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = mult.apply(this, arguments)
    }
})()

var d =proxyMult(1,2,3,4)
var e = proxyMult(1,2,3,4)
console.log('d', d)
console.log('e', e)