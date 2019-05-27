var mult = function(){
    var a = 1;
    for (var i=0,l=arguments.length;i<l;i++){
        a = a * arguments[i]
    }
    return a
}

var plus = function(){
    console.log('开始计算成绩')
    var a = 0;
    for (var i=0,l=arguments.length;i<l;i++){
        a = a + arguments[i]
    }
    return a
}

var createProxyFactory = function (fn) {
    var cache = []
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        console.log('args', args)
        console.log('arguments', arguments)
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = fn.apply(this, arguments)
    }
}

var proxyMult = createProxyFactory(mult),
    proxyPlus = createProxyFactory(plus)

var d =proxyMult(1,2,3,4)
var e = proxyPlus(1,2,3,4)
console.log('d', d)
console.log('e', e)