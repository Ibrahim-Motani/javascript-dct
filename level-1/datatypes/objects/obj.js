// array = ['john', 'sins', 22]

// key == property == label
const person = {
    firstName: 'John',
    lasName: 'Sins',
    age: 22,
}

console.log(person);
console.log(person.firstName); // john
console.log(person['firstName']); // john
console.log(person.city); // undefined

console.log(typeof person); // 'object'

const prices = [10, 20, 30]; // 
console.log(typeof prices);

console.log(Array.isArray(prices));

// operations on an object
