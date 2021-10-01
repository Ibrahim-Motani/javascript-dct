const person = {
    name: 'steve'
};

// method 1
const student = Object.assign({}, person);

console.log(person);
console.log(student);

person.name = 'john';
console.log(person);``
console.log(student);

student.name = 'jack';
console.log(person);
console.log(student);

// method 2
const student2 = { ...person };
console.log(person);
console.log(student2);

student2.name = 'Sins';
console.log(person);
console.log(student2);