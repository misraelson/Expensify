// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };
//
// // destructuring objects and object values
// // below code means we define a const with two properties derived or pulled off from person
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);
//
// // const name = person.name;
// // const age = person.age;
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

const book = {
  title: 'Ego is the enemy',
  auther: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Anonymous' } = book.publisher;

console.log(publisherName);

// Lecture 88
// We can destructure object and their properties. we can pull things off of objects creating separate variables for those values
// this allows us to create those local variables and rename them and set default values for them: const { name: publisherName = 'Anonymous' } = book.publisher;
