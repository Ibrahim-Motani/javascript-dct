// 1
let c3 = 0, c5 = 0;

const fizzbuzz = () => {
    for(let i=1; i<=100; i++) {
        let str = '';
        c3++; c5++;
    
        if(c3 === 3) {str += 'fizz3'; c3 = 0}
        if(c5 === 5) {str += 'buzz5'; c5 = 0}
    
        if(str === '') console.log(i);
        else console.log(str);
    }
}

// 2
const countSheep = num => {
    let str = '';
    for(let i=1; i<=num; i++)
        str += `${i} sheep...`;
    return str;
}
console.log(countSheep(5));

// 3
const countUpDown = num => {
    let arr = [];
    for(let i=0; i<=num; i++)
        arr.push(i);
    for(let i=num-1; i>=0; i--)
        arr.push(i);
    return arr;
}
console.log(countUpDown(3));

// 4
const a = [10, 20, 30, 40];
console.log(a.reduce((acc, element) => acc + element, 0));

// 5
const countVowels = str => {
    let c = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
            c++;
    }
    return c;
}
console.log(countVowels(`javascript is awesome`));

// 6
const generate = (lower, upper) => {
    let arr = [];
    for(let i=lower; i<=upper; i++)
        arr.push(i);
    return arr;
}
console.log(generate(-4, 7));

// 7
const chop = function(str, chunkSize) {
    let arr = [];
    let j = chunkSize;

    for(let i=0; i<str.length; i+= chunkSize) {
        arr.push(str.slice(i, j));
        j += chunkSize;
    }
    return arr;
}
console.log(chop('yutimodi', 7));

// 8
const firstN = function(arr, n=1) {
    if(arr.length === 0) 
        return arr;

    else if(arr.length > 0 && n === 1)     return arr[0];

    else if(n > arr.length)
        return arr;

    else if(n < arr.length)
        return arr.slice(0, n);
};
console.log(firstN([7, 9, 0, -2], -3));console.log(115);