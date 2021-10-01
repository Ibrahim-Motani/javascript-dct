let a = 10;
let b = 20;

console.log('a', a);
console.log('b', b);

// copy value of a into c
let c = a;
console.log('a', c);
console.log('c', c);

a = 125;
console.log('a', a);
console.log('c', c);

// value of primitives don't change when copying. they're independent variables.