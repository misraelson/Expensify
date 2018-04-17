// SECTION 3 LECTURE 16 EVENTS AND ATTRIBUTES
// Commented out other templateTwo and began again
// class="" now needs to be called className because class is a reserved keyword in ES6 for setting classes
// we can actually set our attributes like id="" equal to a js expression
// in order to set up a click
// jsx does not have built in data binding!

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
// set count to 0 and rerender
count = 0;
renderCounterApp();
};

// console.log(templateTwo);
// Challenge
// Make button "-1"
// Make reset button "reset" define setup reset function - log "reset"


// create a new template2 variable with an h1 tag with my name
// we named our element app in index.html so thats what we call here

// this is where we are going


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>RESET</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

// the virtual DOM algorithm runs in the background and calculates what element needs to change
