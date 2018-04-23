'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (previousState) {
        return {
          count: previousState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (previousState) {
        return {
          count: previousState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count,
          ' '
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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

// SECTION 4 LECTURE 33 : ADDING STATE TO COUNTER APP

// Step 1: we set this.state = an object {} and set count: 0
// Step 2: in our render() function we set Count: {this.state.count}, this dynamically renders our count
// ***Step 3: when working with our class based components and we want to change the state, we don't just manually update the object
// instead we call this.setState() on our component instance
// this.setState is a function and it gets called with a single arguement that is a function () => {return{count:}}
// if we want to get the old value so we can increment by one we have access to the current state values via the first arguement which we call (prevState)
// we have set up our first object state, and updated our state dynamically
