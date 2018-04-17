// arguement objects - no longer bound with arrow functions
// below we can clean up the printPlacesLived: function() syntax
// this is the ES6 method definition syntax and allows us to remove the function definition
// if you have two nested ES5 functions, the second fucntion will not have access to the this
// ES6 arrow function use the 'this' value of the context it was created in or its PARENTS this value
// arrow functions dont bind their own 'this' value
// .map like forEach is an ARRAY METHOD that gets called with a single function that gets called one time for each item in the array and we have access to that item via the first arguement.
// the difference is forEach just lets you do something with each item like print it to the screen
// .map allows you to transform each item getting a new array back

const add = (a, b) => {
  // console.log(arguements);
  return a + b;
};
console.log(add(55, 1, 200));

// 'this' keyword - no longer bound with arrow functions

// below is a method which is a function defines on an object 'user' property 'user'
// when we use a regular function and define it on an object property we have access to the 'this' keyword
const user = {
  name: 'kippy',
  cities: ['Montreal', 'Vancouver', 'Edmonton'],
  // printPlacesLived: function () {
  printPlacesLived() {
    // console.log(this.name);
    // console.log(this.cities);

// below gives an error because this is bound within function
    // this.cities.forEach(function (city) {
    //   console.log(this.name + ' has lives in ' + city);
    // });
// 'map' is an array message like 'for each' gets called by a single function
// what is useful is generating little messages inside map
// we are going to be using map extensively, takes an array, lets us provide a function that transforms each item and we get back an array of new items
    return this.cities.map((city) => this.name + ' has lived in:  ' + city);
  }

// Code below WILL work because an arrow function does not bind its own this value
  //   this.cities.forEach((city) => {
  //     console.log(this.name + ' has lives in ' + city);
  //   });
  // }
};
console.log(user.printPlacesLived());
// user.printPlacesLived();


// Challenge area, make an object that has data on the object, use map with arrow function

  // an array of numbers numbers: [2, 40, 60]
  // multiplyBy - single number
const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 5,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
