// 1
const count = (str, find) => {
    const arr = str.split(' ');
    let c = 0;

    for(let word of arr)
        if(word.toLowerCase() === find.toLowerCase())   c++;
    return c;
}
console.log(count('the quick brown fox jumps over the lazy dog', 'the'));

// 2
const rep = (str, times) => {
    let ans = '';
    for(let i=0; i<times; i++) 
        ans += str;
    return ans;
}

console.log(rep('a', 4));

// 3
const check = (obj, prop) => obj.hasOwnProperty(prop);

console.log(check({name:'gokuk',city:'bangalore'}, 'name'));

// 4
const steve = {
    name : 'Steve',
    job : 'Developer',
    isManagaer : false,
};

const keyValue = obj => {
    let arr = [];

    for(let [key, value] of Object.entries(obj)) 
        arr.push(`${key} = ${value}`);
    
    return arr.join(', ');
}

console.log(keyValue(steve));

// 5
const swapObj = obj => {
    const newObj = {};

    for(let [key, value] of Object.entries(obj)) 
        newObj[value] = key;
    return newObj;
}

console.log(swapObj(steve));

// 6
const randomElement = arr => arr[Math.trunc(Math.random() * arr.length)];
console.log(randomElement([10,20,30,40,50]));

// 7
const a = [7, 9, 0, -2];

const lastN = (arr, n = 1) => {
    if(n > 1)
        return arr.slice(-n);
    return arr[arr.length - 1];
}
console.log(lastN(a, 3));

// 8
const capitalize = str => {
    let newStr = '';

    str.split(' ').forEach(word => 
        newStr += `${word[0].toUpperCase()}${word.slice(1).toLowerCase()} `
    );
    return newStr;
}
console.log(capitalize('perfectly alright'));
