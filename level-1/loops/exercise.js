function authenticate(arr, str) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === str)
            return 'authenticated';
    }
    return 'not authenticated';
}

const passwords = [
    'Password123', 
    'dct@academy', 
    'qwerty', 
    'secret123', 
    'gopro123', 
    'harryp@tter'
];

console.log(authenticate(passwords, 'dct@academy'));
console.log(authenticate(passwords, 'Balrog'));