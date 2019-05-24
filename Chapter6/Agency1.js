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
        A.recieveFlower(flower)
    }
}

var A = {
    recieveFlower: function (flower) {
        console.log('收到花' + flower)
    }
}

xiaoming.sendFlower(B)