const password = 'secret123';

// property - values
console.log(password.length);
console.log(password.length > 8 && password.length < 128);

// methods - behaviour
const user = 'ibu';

console.log(user.toUpperCase()); // 'IBU'
console.log('INU'.toLowerCase()); // 'inu'

const word = 'javascript';
console.log(word.indexOf('i')); // 7
console.log(word.lastIndexOf('a')); // 3
console.log(word.indexOf('script')); // returns the starting index of first occurence of the substring
console.log(word.includes('z')); // returns true or false depending wether present in string or not

console.log(word.slice(2, 5)); // 'vas'
console.log(word.substr(2, 5)); // 'vascr'

// str to array
const str = 'js, react, express, mongo';
console.log(str.split(', ')); // split always returns an array

const map = 'bangalore-mysore-cochin';
console.log(map.split('-'));

// let name = 'react';
// name = name.toUpperCase();
// console.log(name);

const name = 'NODE';
node = name.toLowerCase();
console.log(name);