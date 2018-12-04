// 编辑出错  Argument of type 'number[]' is not assignable to parameter of type 'string'.

function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

let resp  = greeter(user)
console.log(resp)
