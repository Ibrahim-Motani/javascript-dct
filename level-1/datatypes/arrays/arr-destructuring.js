var numbers = [10, 20, 30, 40, 50];
// var v1 = numbers[0];
// var v2 = numbers[1];
// var v3 = numbers[2];

const users = ['john', 'doe', 'jack', 'smith', 'jack'];
// const [u1, u2] = users;
// console.log(u1, u2);

const [,,,u1] = users;
console.log(u1);

const u2 = users[4];
console.log(u2);

const f = ['apple', 'mango', 'kiwi'];
console.log(f[0][1]);

const o = { name : 'marker' };
console.log(typeof f === typeof o);

f.slice(1, 2);
console.log(f);

const n = [1,2,3,4,5];
n.pop(4);
console.log(n);