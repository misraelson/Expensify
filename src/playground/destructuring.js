// OBJECT DESTRUCTURING

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

// const book = {
//   title: 'Ego is the enemy',
//   auther: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Anonymous' } = book.publisher;
//
// console.log(publisherName);

// ARRAY destructuring

// const address = ['1299 S Juniper Street', 'Pistolberg', 'Pennsylvania', '19147'];
// // for array destructuring we use square brackets
// // inside goes ordered list of variable names
// // if we dont want address and zip we leave the last one off and leave a comma in place of the first item
// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}. `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [menuitem, , mediumPrice] = item;

console.log(`A ${menuitem} costs ${mediumPrice}`);

// Lecture 88
// We can destructure object and their properties. we can pull things off of objects creating separate variables for those values
// this allows us to create those local variables and rename them and set default values for them: const { name: publisherName = 'Anonymous' } = book.publisher;
