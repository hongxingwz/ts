var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var animal = new Animal('JiangLei');
animal.move(45);
// 理解private
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var cat = new Animal2('Cat');
console.log(cat.name);
