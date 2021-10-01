let a = [10];
let c = a.slice();

console.log('a', a);
console.log('c', c);

a.push(20);
console.log('a', a); // [10, 20]
console.log('c', c); // [10]


// method 2
let d = [].concat(a);
d.push(40);
console.log('a', a); // [10, 20]
console.log('d', d);

// method 3
let e = [...a];
e.push(90);
console.log('a', a); // [10, 20]
console.log('e', e);

