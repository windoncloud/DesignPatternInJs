var Flower = function () {

}

var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower();
        target.recieveFlower(flower);
    }
};

var B = {
    recieveFlower: function (flower) {
        A.listenGoodMood(function () {
            A.recieveFlower(flower)
        })
    }
}

var A = {
    recieveFlower: function (flower) {
        console.log('收到花' + flower)
    },
    listenGoodMood: function (fn) {
        setTimeout(function () {
            fn()
        }, 1000)
        //  假设10妙后A的心情变好
    }
}

xiaoming.sendFlower(B)