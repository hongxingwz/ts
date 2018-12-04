function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
var resp = greeter(user);
console.log(resp);
