// 1
const keys = obje => {
    let arr = [];
    for(let key in obje)
        arr.push(key);
    return arr;
}

console.log(keys({first: 'Matt', last: 'Lane'}));
console.log(keys({}));
console.log(`----------------------------`);

// 2
let arr = [60, 20, 30, 40];
console.log(
    arr.reduce((acc, curr) => {
        if(acc > curr)
            return acc;
        else
            return curr;
    }, arr[0])
);
console.log(`--------------------------`);

// 3
const palindrome = str => {
    let check = '';
    for(let i=str.length-1; i>=0; i--)
        check += str[i];
    if(str === check)
        return true;
    return false;
}
console.log(palindrome('mom'));
console.log(`---------------------`);

// 4
const endsWith = (str, suffix) => {
    return str.slice(-suffix.length) === suffix
} 
// let str = 'JS  PHP PYTHON';
// console.log(str.slice(-6));
console.log(endsWith('I am a good developer', ')'));
console.log(`-------------------------`);

// 6
const alternate = str => {
    let even = '';
    let odd = '';

    for(let i=0; i<str.length; i++) {
        if(i%2 === 0) {
            even += str[i].toUpperCase();
            odd += str[i].toLowerCase();
        }
        if(i%2 !== 0){
            odd += str[i].toUpperCase();
            even += str[i].toLowerCase();
        }
    }
    return [even, odd];
}
console.log(alternate('abcdef'));
console.log(`-----------------------`);

// 7
const superHeroes = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",

        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },

    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",

        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ] 
    },
];

const power = (obj, heroName) => {
    for(let hero of obj)
        if(hero.name === heroName)
            return hero.powers
}

console.log(power(superHeroes, 'Molecule Man'));

