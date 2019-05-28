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