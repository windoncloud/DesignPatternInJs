var synchronousFile = function (id) {
    console.log('开始同步文件，id为： ' + id);
}

var checkbox = document.getElementsByTagName('input')

for (var i = 0, c; c = checkbox[i++];) {
    c.onclick = function () {
        if (this.checked === true) {
            synchronousFile(this.id)
        }
    }
}