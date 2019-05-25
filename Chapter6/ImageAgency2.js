var imgArr = ['https://img1.tuhu.org/activity/image/b1ab/ed9b/6daeefac4620e13b22fbfad4_w96_h102.png@80h_99q.jpg', 'https://img1.tuhu.org/activity/image/0d9a/8af2/1a2d79247326e377bbdc6755_w96_h102.png@80h_99q.jpg']
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src
        }
    }
})();

var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        // this.src.split(',')
        // myImage.setSrc(this.imgArr[0]);
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('https://img1.tuhu.org/activity/image/0d9a/8af2/1a2d79247326e377bbdc6755_w96_h102.png@80h_99q.jpg');
            // img.src = imgArr;
            img.src = src
        }
    }
})();
// myImage.setSrc('http://imgcache.qq.con/music/photo/k/000GGDy0yA0NK.jpg')
proxyImage.setSrc('https://img1.tuhu.org/Images/Logo/baoma.png@28w_99q.jpg')