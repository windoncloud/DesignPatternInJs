var func = function (a, b, c) {
    // alert(this === window)
    // alert([a, b, c])
    // alert(a +'' + b +'' +c)
}

func.apply(null, [1,2,3])

func.call(null, 1, 2, 3)

document.getElementById = function ( func ) {
    return function () {
        return func.apply(document, arguments)
    }
}(document.getElementById)

var getId = document.getElementById
var div = getId('as')
alert(div.id)

Function.prototype.bind = function () {
    var self = this,
        context = [].shift.call(arguments),
        args = [].slice.call(arguments);
    return function () {
        return self.apply(context, [].concat(args, [].slice.call(arguments)))
    }
}

var obj = {
    name: 'sven'
}

var func = function(a,b,c,d){
    alert(this.name)
    alert([a,b,c,d])
}.bind(obj,1,2)

var ccc = func(3,4)
console.log('ccc', ccc)