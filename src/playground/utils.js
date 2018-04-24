console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

// export { square, add, subtract as default };

// SECTION 6 Lecture 51 ES6 EXPORT AND IMPORT

// above the arrow function just means return()
// exports - default export - named exports
// cannot set a value like name: 'Andrew' this is misuse of export syntax
// we already have square variable defined so we can use export to export that
// we still need to set up the import statement on app.js
// if don't want to export our named export all in one shot we can export the individual variables as we define them by adding the export keyword in front of the const
// CANNOT HAVE more than one default export
