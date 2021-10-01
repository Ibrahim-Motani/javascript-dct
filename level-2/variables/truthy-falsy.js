// falsy
console.log(0, Boolean(0));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log(NaN, Boolean(NaN));
console.log('', Boolean(''));
console.log(false, Boolean(false));

// truthy
console.log(1, Boolean(1));
console.log(-1, Boolean(-1));
console.log('dct', Boolean('dct'));
console.log([], Boolean([]));
console.log({}, Boolean({}));
