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
if(lowerCaseName === 'craig' || lowerCaseName === 'bob') {
  alert('Welcom back to my page, ' + userName);
} else {
  alert('Welcome new user to my page.');
}
