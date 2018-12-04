let isDone: boolean = false;


let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;


let name2: string = "bob";
name2 = 'smith'

let name3: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name3 }.
    
    I'll be ${ age + 1 } years old next month.
`
console.log(sentence)


let list: number[] = [1, 2, 3];
let list2: Array<number> =  [1, 2, 3];
console.log(list)
console.log(list2)

// 元组 Tuple
let x: [string, number]

x = ['hello', 10]
console.log(x)

x = [10, 'hello']
console.log(x)
