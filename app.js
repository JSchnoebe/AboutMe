'use strict';
//first thing to do
console.log('This file is connected.');


//prompt our user for input data
let userName = prompt('What is your name?');
console.log(userName);

//Greet the user
alert('Hello ' + userName);

//convert the input to lowerCase
let lowerCaseName = userName.toLowerCase();
console.log(lowerCaseName);

//Validate the input using conditional logic using strict equals.
if(lowerCaseName === userName) {
  alert('Welcome back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
}

let myTeam = prompt('What is my favorite team?').toLowerCase();
console.log(myTeam);

//Validate answer is correct
if(myTeam === 'cubs') {
    alert('Correct, nice job, ' + userName);
} else {
    alert('Sorry, incorrect');
}

//prompt our user for input data
let mySport = prompt('What is my favorite sport?').toLowerCase();
console.log(mySport);

if(mySport === 'baseball') {
    alert('Hey, that is correct!');
} else {
    alert('That is not my favorite, but I like that too.');
}

//prompt our user for input data
let mySeason = prompt('What is my favorite season?').toLowerCase();
console.log(mySeason);

if(mySeason === 'summer') {
    alert('Yes! I love summer!');
} else {
    alert('Nope. Not a fan.');
}

//prompt our user for input data
let mySteak = prompt('How do I like my steak?').toLowerCase();
console.log(mySteak);

if(mySteak === 'medium rare') {
    alert('Of course. Medium rare is the best!');
} else {
    alert('Nope. Not a fan.');
}

//prompt our user for input data
let myMusic = prompt('Do I prefer country or rap music?').toLowerCase();
console.log(myMusic);

if(myMusic === 'rap') {
    alert('Yup! But i like country too.');
} else {
    alert('Nope. But I like country music sometimes.');
}
