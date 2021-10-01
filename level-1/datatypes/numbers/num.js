const speed = 90, temp = 28.7;
console.log(typeof speed); // number
console.log(typeof temp); // number

// Math Object
console.log(Math.round(12.3)); // 12
console.log(Math.round(19.8)); // 20
console.log(Math.round(temp)); // 29
console.log(temp); // value doesn't change

console.log(Math.ceil(14.3)); // 15
console.log(Math.ceil(20.8)); // 21

console.log(Math.floor(14.3)); // 14
console.log(Math.floor(20.8)); // 20

console.log(Math.abs(-125)); // 125
console.log(Math.pow(2, 4)); // 16
console.log(Math.sqrt(64)); // 8

console.log(Math.min(15, 21, 6, 19, 3)); //3
console.log(Math.max(15, 21, 6, 19, 3));