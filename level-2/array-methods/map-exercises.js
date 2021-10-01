const numbers = [10, 15, 20, 25];

// add 2 
const add2 = numbers.map((ele) => ele += 2);
console.log(add2);


// add 2 to even and 3 to odd numbers
const oddEven = numbers.map((ele) => (ele % 2 === 0) ? ele += 2 : ele += 3);
console.log(oddEven);

// add 5
const add5 = numbers.map((ele) => (ele % 2 === 0) ? ele += 5 : ele);
console.log(add5);
console.log(`--------------------------------------`);

// array to obj using map
const fruits = ['apple', 'mango', 'kiwi'];
const obj = fruits.map((ele) => {
    let temp = {};
    temp[ele] = ele.length;
    return temp;
});
console.log(obj);