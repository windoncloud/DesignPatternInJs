var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src
        }
    }
})()

// myImage.setSrc('http://imgcache.qq.con/music/photo/k/000GGDy0yA0NK.jpg')
myImage.setSrc('https://img1.tuhu.org/Images/Logo/baoma.png@28w_99q.jpg')