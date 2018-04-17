console.log('App.js is running!');

// create app object with title/subtitle
// use title and subtitle in the template
// render template

// going to be using if statements, ternary objects and
// only render subtitle (and p tag) if subtitle exists - &&
// render new p tag - if options.length > 0 "Here are your options" "No options"

const app = {
  title: 'Indecision APP',
  // subtitle: 'No Longer here',
  // options: ['One', 'Two']
  options: []
};

// write a function called getSubtitle that takes an arguement and renders jsexpression {app.subtitle} if it exists
// function getSubtitle(subtitle) {
//   if (subtitle) {
//     return <p>{app.subtitle}</p>
//   }
// }

// JSX- is JavaScript XML
// the {} denotes js expressions where we can render js objects.properties
// We can't render objects only expressions
// ***SECTION 3 LECTURE 18 Forms and Inputs:
// we added our basic <form> tag and an <input type>
// we want to grab the input from the user to do this we create a <const> to hold that value
// to dig into the form we use <e.target>
// e.targer points to the element the event started on which in this case is form which we gave name "option" and we want to get <.value>
const onFormSubmit = (e) => {
  e.preventDefault();

  console.log('form submitted');

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    console.log(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

const onRemoveAll= () => {
  app.options = [];
  renderIndecisionApp();
};


const appRoot = document.getElementById('app');


const renderIndecisionApp = () => {
  const template = (
   <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     {/* {getSubtitle(app.subtitle)} */}
     {/* checking if app.optons.length is greater than 0 '?' (if it is then) ':' (if not) */}
     <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'  }</p>
     {/* <p>{app.subtitle}</p> */}
     <p>{app.options.length}</p>
     {/* <p>{app.option}</p> */}
     <button onClick={onRemoveAll}>REMOVE ALL</button>
     <ol>
       <li>Item One</li>
       <li>Item Two</li>
     </ol>
     <form onSubmit={onFormSubmit}>
       <input type="text" name="option"/>
       <button>Add Option</button>
     </form>
   </div>
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
// we can reference any js variable inside our h1 using JS expressions via curly braces
// this means we can add methods to the end of that JS expression
// undefined null are ignored by jsx
// const user = {
//   name: 'Andres',
//   age: 22,
//   location: 'Philly'
// };
// we can write ES5 functions that return a string and then render that JS function as an expression inside our template below ie: {getLocation()}
// getLocation now takes an arguement  (location)
// in our 'if' statement below we check <if (location) exists> we will return that location
// if it doesnt exist we are going to return the static string of 'unknown'
// if an expression resolves to 'undefined' as in else return undefines; it will display nothing
// function getLocation(location){
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// var userName = 'Stan';
// var userAge = 45;
// var userLocation = 'San Fransisco'
// the logical && operator is good for doing something or nothing at all
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18 ) && <p>AGE: {user.age}</p>}
//     {/* <p>Age: {user.age}</p> */}
//     {getLocation(user.location)}
//     {/* <h1>{userName.toUpperCase()}</h1>
//     <p>Age: {userAge}</p>
//     <p>Location: {userLocation}</p> */}
//   </div>
// );
