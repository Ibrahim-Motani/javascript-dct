const person = {
    firstName: 'John',
    lasName: 'Sins',
    age: 22,
}

console.log(person.firstName);
console.log(person);

// create a property
person.city = 'Bangalore';
person['country'] = 'INDIA'
console.log(person);

// update a property
person.age = 25;
person['firstName'] = 'Ibu';
console.log(person);

// delete property
delete person.lasName;
console.log(person);

