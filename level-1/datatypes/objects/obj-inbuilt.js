const person = {
    firstName: 'John',
    lasName: 'Sins',
    age: 22,
}

// keys and values
console.log(Object.keys(person));
console.log(Object.values(person));

// 
console.log(Object.keys(person).includes('firstName'));
console.log(Object.keys(person).includes('occupation'));

console.log(Object.values(person).includes('Ibu'));
console.log(Object.values(person).includes(22));