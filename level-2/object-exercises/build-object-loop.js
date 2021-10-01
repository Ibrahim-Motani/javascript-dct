const fruits = ['apple', 'kiwi', 'mango'];

const buildObj = arr => {
    const obj = {};

    arr.forEach(element => obj[element] = element.length);

    return obj;
};

console.log(buildObj(fruits));

// ------------------------------------------
const countVowels = str => {
    const count =
        { a: 0, e: 0, i: 0, o: 0, u: 0, };
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') count[str[i]]++;
        else if (str[i] === 'e') count[str[i]]++;
        else if (str[i] === 'i') count[str[i]]++;
        else if (str[i] === 'o') count[str[i]]++;
        else if (str[i] === 'u') count[str[i]]++;
    }
    return count;
};
console.log(countVowels('ibrahim'));

// -----------------------------------------
const frequency = str => {
    const result = {};
    for (let char of str) {
        if (result.hasOwnProperty(char))
            result[char]++;
        else
            result[char] = 1;
    }
    return result;
}
console.log(frequency('ibrahim'));

// ---------------------------------------
function set(arr){
    let n = arr.sort((a, b) => a - b);
    let ans = new Array(new Set(n));
    return ans;
}
console.log(set([1,2,3,1,2,3]));