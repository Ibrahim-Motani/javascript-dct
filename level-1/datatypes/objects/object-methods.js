const product = {
    id : 1,
    name : 'marker',
    price : 10,
}

// freeze method
// console.log(product);
// Object.freeze(product);
// product.price = 15;
// product.rating = 4.3;
// console.log(product);

// seal method
// console.log(product);
// Object.seal(product);
// product.price = 15;
// console.log(product);

// assign method
const item = { seller : 'Dev international' };
console.log(item);
Object.assign(item, product);
console.log(item);

// entries()
console.log(Object.entries(product));
// keys()
console.log(Object.keys(product));
// values()
console.log(Object.values(product));