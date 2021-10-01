const person1 = { firstName: 'Steve', lastName: 'adams' };

function greet(msg, sign) {
    console.log(this);
    console.log(`${msg} ${sign}${this.firstName}`);
};

//greet('hi');
const newGreet = greet.bind(person1, 'Hi', 'Mr.');
newGreet();

let str = "1, 2, 3, 4, 5, 6, 7";
console.log(str.split(', '));
console.log(str.slice(1, str.length-1));