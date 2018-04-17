var nameVar = 'Kippy';
// with var based variables we can unwittingly reassign or redefine variables and can cause debugging nightmares
var nameVar = 'Thom';
console.log('nameVar', nameVar);

// inside ES6 it is no longer valid to redefine let based variabes
let nameLet = 'Jordo';
console.log('nameLet', nameLet);

// cannot redefine or reassign these variables
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// var based variables are function scoped, cannot be accessed outside this function
function getPetName() {
  var petName = 'Hal';
  return petName;
}

// getPetName();
// this gives an error: app.js:25 Uncaught ReferenceError: petName is not defined
// cannot access petName directly because its not available in the Parent Global Scope
// console.log(petName);

// let and const are also 'block level scoped' which means it is bound to code blocks like 'for' loops or 'if' statements

// var fullName = 'Kippy Scarborough';
// we are going to check if 'fullName' exists with an 'if' statement and if it does we are going to split with a space into an array
// if (fullName) {
//   var firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
//   console.log(firstName);

  const fullName = 'Kippy Scarborough';
  // let allows us to redefine variables later
  let firstName;

  if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
  }
// if we try to use console.log on a const outside that code block we will get an error
    // console.log(firstName);
