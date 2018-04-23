class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count +1
      }
    });
  }
  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count -1
      };
    });
  }
    handleReset() {
      this.setState(() => {
        return {
          count: 0
        };
      });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// // SECTION 3 LECTURE 16 EVENTS AND ATTRIBUTES
// // Commented out other templateTwo and began again
// // class="" now needs to be called className because class is a reserved keyword in ES6 for setting classes
// // we can actually set our attributes like id="" equal to a js expression
// // in order to set up a click
// // jsx does not have built in data binding!
//
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
// // set count to 0 and rerender
// count = 0;
// renderCounterApp();
// };
//
// // console.log(templateTwo);
// // Challenge
// // Make button "-1"
// // Make reset button "reset" define setup reset function - log "reset"
//
//
// // create a new template2 variable with an h1 tag with my name
// // we named our element app in index.html so thats what we call here
//
// // this is where we are going
//
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>RESET</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
//
// // the virtual DOM algorithm runs in the background and calculates what element needs to change

// SECTION 4 LECTURE 33/34 : ADDING STATE TO COUNTER APP

// Step 1: we set this.state = an object {} and set count: 0
// Step 2: in our render() function we set Count: {this.state.count}, this dynamically renders our count
// ***Step 3: when working with our class based components and we want to change the state, we don't just manually update the object
// instead we call this.setState() on our component instance
// this.setState is a function and it gets called with a single arguement that is a function () => {return{count:}}
// if we want to get the old value so we can increment by one we have access to the current state values via the first arguement which we call (prevState)
// we have set up our first object state, and updated our state dynamically

// this.setState is ASYNCHRONOUS
// ALWAYS USE this.setState with an updater funtion =>
