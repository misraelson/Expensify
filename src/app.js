import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// class OldSyntax {
//   constructor() {
//     this.name = "Matt";
//   }
//   getGreeting() {
//     return 'Hi, My name is ${this.name}.';
//   }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
//
// // --------------
//
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return 'Hi, My name is ${this.name}.';
//   }
// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax);

// const template = <p>THIS IS JSX FROM WEBPACK BITCH!</p>
// ReactDOM.render(template, document.getElementById('app'));

// import validator from 'validator';
//
// //validator.isEmail('test');
//
// console.log(validator.isEmail('test@gmail.com'));


// import './utils.js';
// import subtract, { square, add } from './utils.js';
//
// console.log('app.js is running!!');
// console.log(square(4));
// console.log(add(4, 5));
// console.log(subtract(100, 81));

// import isSenior, { isAdult, canDrink } from './person.js';
//
// console.log(isAdult(17));
// console.log(canDrink(25));
// console.log(isSenior(65));



// SECTION 6 Lecture 51:

// we imported our first file using webpack using the command: import './utils.js'; and we see the console.log running
// each file in webpack application maintains its OWN SCOPE
// syntax for importing is to use curly braces and provide export you want and give from with a path
// added the 'add' function we just defined in utils and can import it using a comma afer 'square'
// these are called NAMED EXPORTS because we ex/import by name
// to import the default export we put it before the curly braces
// if we just want the default we can remove the curly braces and just hve the name of the defualt function exported
// the DEFAULT EXPORT the naming is not important. we can call it anything we want cuz its the default
// No hard and fast rule about when to use named and when to use default exports


// SECTION 6 Lecture 53 IMPORTING NPM MODULES

// three steps: install (using yarn) -> import (using webpack) -> use
// going to install npm validator (google it)
// installed validator via yarn add validator@8.0.0
// import validator from 'validator';
// not using a relative path, when we provide just the name webpack will look for a module of the same name in the node modules folder
// check out the validator docs want to use isEmail('string') method

// we imported the validator library from validator

// CANT just use jsx inside web pack without first teaching webpack how to run babel
// we use the babel loader to do this. we made a rule inside webpack.config.js that specifies that whenever you see a file that ends in .js and IS NOT in the node modules folder, go ahead and run it through babel
// this includes app.js and anything app.js imports

// moved all of our coponents outside app.js into their own component files and imported them into app.js
