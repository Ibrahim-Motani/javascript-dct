const source = 'Bangalore', destination = 'Mysore', distance = 140, duration = '3 hours 30 mins';

// the distance between bangalore and mysore is 140 kms and the time taken to travel is 3 hours and 30 mins

console.log('the distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and the time taken to travel is ' + duration + '.');

// es6 template literal
console.log(`the distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${duration}.`);