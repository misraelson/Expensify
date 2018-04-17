function square (x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// this is identical to the arrow function above. return is implicit in the function below
const squareArrow = (x) => x * x;

console.log(squareArrow(4));

// Challenge. Write a function that takes in a full name and returns first name
// we write an immutable function with const called getFirstName that takes in an arguement called (fullName)
// we then set up the arrow and return a body that takes our arguement and splits then returns the first element of the array
const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Sniper'));
console.log(getFirName('Smithy Smith'));
