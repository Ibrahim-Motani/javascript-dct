let a = [10];
let b = ['apple'];

console.log('a', a);
console.log('b', b);

// copying values of a into c
let c = a;
console.log('a', a); // [10, 20]
console.log('c', a);

a.push(20);
console.log('a', a); // [10, 20]
console.log('c', a); // [10, 20]

c.push(30);
console.log('a', a); // [10, 20]
console.log('c', a);
