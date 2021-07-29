'use strict';
//first thing to do
console.log('This file is connected.');

//global variable
var userPoints = 0;

alert('Hello. Welcome to my guessing game.')


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
    userPoints += 1;
    console.log('This is the users total points', userPoints);
} else {
    alert('Sorry, incorrect');
    console.log('This is the users total points', userPoints);
}

//prompt our user for input data
let mySport = prompt('What is my favorite sport?').toLowerCase();
console.log(mySport);

if(mySport === 'baseball') {
    alert('Hey, that is correct!');
    userPoints += 1;
    console.log('This is the users total points', userPoints);
} else {
    alert('That is not my favorite, but I like that too.');
    console.log('This is the users total points', userPoints);
}

//prompt our user for input data
let mySeason = prompt('What is my favorite season?').toLowerCase();
console.log(mySeason);

if(mySeason === 'summer') {
    alert('Yes! I love summer!');
    userPoints += 1;
    console.log('This is the users total points', userPoints);
} else {
    alert('Nope. Not a fan.');
    console.log('This is the users total points', userPoints);
}

//prompt our user for input data
let mySteak = prompt('How do I like my steak?').toLowerCase();
console.log(mySteak);

if(mySteak === 'medium rare') {
    alert('Of course. Medium rare is the best!');
    userPoints += 1;
    console.log('This is the users total points', userPoints);
} else {
    alert('Nope. Not a fan.');
    console.log('This is the users total points', userPoints);
}

//prompt our user for input data
let myMusic = prompt('Do I prefer country or rap music?').toLowerCase();
console.log(myMusic);

if(myMusic === 'rap') {
    alert('Yup! But i like country too.');
    userPoints += 1;
    console.log('This is the users total points', userPoints);
} else {
    alert('Nope. But I like country music sometimes.');
    console.log('This is the users total points', userPoints);
}
//prompt our user for input data
let entries = 6;
while(entries > 0) {
    let userHolidays = prompt('What is one of my two favorite holidays?').toLowerCase();
    console.log(userHolidays);

    if(userHolidays === 'christmas' || userHolidays === 'thanksgiving') {
        alert('You guessed it! Nice job!');
        userPoints += 1;
        console.log('This is the users total points', userPoints);
        break;
    } else {
        alert('Nope. Not quite.');
        console.log('This is the users total points', userPoints);
    }
}

let answer = 5;
let chances = 4;
while(chances > 0) {
    let userNumber = prompt('I am thinking of a number between 1 and 10. What is your guess?');
    console.log('Not a number.', typeof(userNumber));
    if(!userNumber) {
        break;
    }
    userNumber = Number(userNumber);
    console.log('Not a number.', userNumber);
    if(userNumber === answer) {
        //Let the user know they are right
        alert('You got it!! You must be a mind reader!');
        userPoints += 1;
        //Set chances = 0
        break;
    } else {
        //Handle whether they guessed too high or too low
        if(userNumber > answer) {
            alert('Sorry, your answer is too high. Try again.');
            //Decrement the chances
            chances -= 1;
            console.log('This is the amount of user chances', chances);
        }
        if(userNumber < answer) {
            alert('Sorry, your answer is too low. Try again.');
            chances -= 1;
            console.log('This is the amount of user chances', chances);
        }
        
    }
 }//This closes while loop
// if(chances = 0) {
//     alert('Sorry you ran out of chances. The number was 5!');
//     console.log('This is the amount of user chances', chances);
// }