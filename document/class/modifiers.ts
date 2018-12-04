class Animal {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let animal: Animal = new Animal('JiangLei');
animal.move(45);

// 理解private

class Animal2 {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

let cat = new Animal2('Cat')
console.log(cat.name)

