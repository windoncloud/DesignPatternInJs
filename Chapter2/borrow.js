var A = function (name) {
    this.name = name
}

var B = function () {
    A.apply( this, arguments)
}

B.prototype.getName = function () {
    return this.name
}

var b = new B('sven')

console.log(b.getName())

(function () {
    Array.prototype.push.call(arguments, 3)
    console.log(arguments)
})(1, 2)

var a = {}
Array.prototype.push.call(a, 'first')
console.log(a.length)
console.log(a)
console.log(a[0])