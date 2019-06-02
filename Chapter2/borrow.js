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

console.log(b.getName()); // semicolon required

(function () {
    Array.prototype.push.call(arguments, 3)
    console.log(arguments)
})(1, 2)