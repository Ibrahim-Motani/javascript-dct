const person = {
    firstName: 'John',
    lasName: 'Sins',
    email: 'john@sins.com',
    age: 22,
}

// for-in loop for an object
for(const key in person) {
    console.log(key, person[key]);
}


// object destructuring
