//const fruits = [];
const arr = new Array();

const fruits = ['apple','mango', 'banana'];

const fruits2 = new Array('mango', 'apple', 'banana');

console.log(fruits2[0]);
console.log(fruits2[10]); // undefined
console.log(typeof fruits2); // object

fruits2.push('kiwi');
console.log(fruits2);

console.log(fruits2.push('berries')); // returns new length of the array

console.log(fruits2.pop()); // last element remove
console.log(fruits2);

fruits2.unshift('orange'); // add at start
console.log(fruits2);
console.log(fruits2.unshift('papaya')); // returns new length of the array
console.log(fruits2.shift()); // removes first element from the array
console.log(fruits2);

const numbers = [10, 20];
numbers.push(30, 40, 50);
console.log(numbers);

numbers.unshift(1, 2, 3);
console.log(numbers);

console.log(numbers.reverse());
console.log(numbers); // changes original array

console.log(fruits2.sort());
console.log(fruits2); // changes original array

const players = ['sachin', 'virat', 'sehwag'];
console.log(players.indexOf('virat'));
console.log(players.indexOf('yuvraj'));
console.log(players.lastIndexOf('sachin'));
console.log(players.includes('sachin'));
console.log(players.includes('saurav'));

console.log(players.join('.'));

const set1 = [10, 20], set2 = [21, 24];
console.log(set1 + set2); // adds them as string
const result = set1.concat(set2);
console.log(result);
console.log(set1);
console.log(set2);

