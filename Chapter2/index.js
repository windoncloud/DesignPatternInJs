window.a = 2
var obj = {
    a: 1,
    getA: function () {
        alert( this === obj );  // true
        alert( this.a );    // 1
    }
}

obj.getA();

window.name = 'globalName';

var getName = function () {
    return this.name;
}

console.log(getName())

var myObject = {
    name: 'sven',
    getName: function () {
        alert(this.name)
        return this.name;
    }
}
myObject.getName() // sven
var getName = myObject.getName // globalName 与执行环境相关
console.log( getName() )

var MyClass = function () {
    this.name = 'sven'
}

var obj = new MyClass()
console.log(obj.name)

var _MyClass = function () {
    this.name = 'sven'
    //new funtion 时 this 返回对象
    return {
        name: 'anne'
    }
}

var _obj = new _MyClass()
console.log(_obj.name)

var __MyClass = function () {
    this.name = 'sven'
    return 'anne'
}

var __obj = new __MyClass()
console.log(__obj.name)
