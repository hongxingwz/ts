class Animal {
    move(distanceIMeters: number = 0) {
        console.log(`Animal moved ${distanceIMeters}m.`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!')
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();