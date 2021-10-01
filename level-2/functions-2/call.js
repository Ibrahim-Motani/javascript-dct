const person1 = { firstName: 'Steve', lastName: 'adams' };

function greet(msg, sign) {
    console.log(this);
    console.log(`${msg} ${sign}${this.firstName}`);
};

//greet('hi');
greet.call(person1, 'Hi', 'Mr.');