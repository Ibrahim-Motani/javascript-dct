const person = {
    name: 'Robin',
    city: 'Bangalore',
    profession: 'Developer',
    
    greet() {
        return 'Hi there';
    },

    code() {
        return 'Currently coding';
    },
};

console.log(person.name);
console.log(person.city);
console.log(person.greet);
console.log(person.greet());