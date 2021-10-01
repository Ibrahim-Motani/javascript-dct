// function swapCase(str) {
//     let ans = '';

//     for(let i=0; i<str.length; i++) {
//         if(str[i] === str[i].toUpperCase())
//             ans += str[i].toLowerCase();
//         else
//             ans += str[i].toUpperCase();
//     }

//     return ans;
// };

// const swap = str => {
//     str
//     .split('')
//     .map(char => {
//         if(char === char.toUpperCase())
//             return char.toLowerCase();
//         else
//             return char.toUpperCase();
//     })
//     .join('');
// } 

// console.log(swapCase('DctDCt'));
// console.log(swap('DctDCt'));

console.log(`--------------------`);

const swap = str => str
    .split('')
    .map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    })
    .join('')

console.log(swap('AbCdEf'));