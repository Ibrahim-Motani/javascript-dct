// if statement
const userPassword = 'secret123';

if(userPassword.length >= 8 && userPassword.length <= 128) {
    console.log('proceed forward');
}
else {
    console.log('password length is too short');
}

const randomNumber = 35, userGuess = 70;
if(userGuess > randomNumber)
    console.log('high guess');
else if(userGuess < randomNumber)
    console.log('low guess');
else
    console.log('correct guess');

