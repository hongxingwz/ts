class Greeter{
    greeting: string;

    constructor(mesage: string) {
        this.greeting = mesage;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter);