Array.prototype.unique=function(){
    var arr=[];//新建一个临时数组
    for(var i=0;i<this.length;i++){//遍历当前数组
        if(arr.indexOf(this[i])==-1){//当前数组的第i个值在新数组中找不到，则添加到新数组中去
            arr.push(this[i]);
        }
    }
    return arr;
};
Array.prototype.unique=function(){
    var arr=[];//新建一个临时数组
    var obj={};//新建一个新对象，根据对象属性的唯一性，来判断
    for(var i=0;i<this.length;i++){//遍历当前数组,将当前数组的值作为对象的属性，判断是否在对象中存在。
        if(obj[this[i]]==undefined){
            obj[this[i]]=1;
            arr.push(this[i]);
        }
    }
    return arr;
};
Array.prototype.unique=function(){
    var arr=[];//新建一个临时数组
    for(var i=0;i<this.length;i++){  //遍历当前数组
        if(this.indexOf(this[i]) == i){//判断当前数组第i个值是否是第i个数，如果不是，代表数组前面已有相同的值。
            arr.push(this[i]);
        }
    }
    return arr;
};

var synchronousFile = function (id) {
    console.log('开始同步文件，id为： ' + id);
}

var proxySynchrousFile = function () {
    var cache = [], //保存一段时间内需要同步的ID
        time;
    return function(id) {
        cache.push(id)
        if (time) {
            return;
        }
        time = setTimeout(function () {
            cache = cache.unique()
            synchronousFile(cache.join(','))  // 2 秒后向本体发送需要同步的ID集合
            clearTimeout(time) // 清空定时器
            time = null
            cache.length = 0 //清空 ID 集合
        }, 2000)
    }
}()

var checkbox = document.getElementsByTagName('input')

for (var i = 0, c; c = checkbox[i++];) {
    c.onclick = function () {
        if (this.checked === true) {
            proxySynchrousFile(this.id)
        }
    }
}

