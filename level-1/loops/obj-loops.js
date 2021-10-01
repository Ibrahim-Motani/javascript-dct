const person = {
    firstName: 'john',
    lastName: 'sins',
    age: 22,
}

for(const key in person) {
    console.log(key, person[key]);
}