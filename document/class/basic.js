var Greeter = /** @class */ (function () {
    function Greeter(mesage) {
        this.greeting = mesage;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter);
