const fruits = ['apple', 'kiwi', 'banana', 'mango'];

// remove elements from specific index
console.log(fruits);
fruits.splice(1, 2);
console.log(fruits);

// add elements at specific index
const products = ['marker', 'sacle', 'board', 'rack'];
products.splice(2, 0, 'pencil');
console.log(products);