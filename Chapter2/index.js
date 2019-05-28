var obj = {
    a: 1,
    getA: function () {
        alert( this === obj );  // true
        alert( this.a );    // 1
    }
}

obj.getA();