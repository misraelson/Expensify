'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
      // this.setState(() => ({ options: [] }));
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'Put your life in hands computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []

  // a REACT COMPONENT is just an ES6 CLASS OBJECT
  // we use the global REACT with the COMPONENT class value which gives us all the react features
  // REact components all REQUIRE one method: render

};var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// to render a react component we use our CLASS NAME hence uppercase Header that looks like custom html

// to render we must use ReactDOM.render


ReactDOM.render(React.createElement(IndecisionApp, { options: ['Deveils Den', 'Second District'] }), document.getElementById('app'));

// Section 4 Lecture 18 : COMPONENT properties

// We are going to pass data in everytime we intialize a component (such as the header title of each page), this data is called PROPS

// We set up key value pairs. key can be anything we like
// Inside out components we have access to THIS. THIS references the instance of that component we have rendered. In this case for Header title-"Test Value" is this.props
// to pass it to our component, inside our h1 tag we add {jsx} a JavaScript expression with this.props.title

// Inside the IndecisionApp component RENDER we defined a new const title to be passed via jsx to header in the return
// We made a second const in IndecisionApp called subtitle. We gave header another prop called subtitle and set it equal to jsx {subtitle}
// Inside header component we set {this.props.subtitle} and our subtitle shows up

// created a new const inside IndecisionApp called options set it equal to some static strings
// then created a new PROPS on the <Options /> in IndecisionApp component

// inside the options component we access are options array this.props.options.map and use an arrow function and access the individual item in the array (option) => inside the <p> paragraph tag we want to set text and key. text being {option} inside p tags and key set to {option}

// THEN we remove p tags and render an instance of <Option />
// we then set up key equal to {option} and set up optionText={option}
// then inside Option component we set up jsx rendering {this.props.optionText}
// this gives us a ton of flexibility to change what option looks like. We can add text in front of {this.props.optionText} and it shows up for all the options


// Section 4 Lecture 29: EVENTS AND METHODS

// Apply jsx event handlers to class based components like Action

// first we set up a new method before render() in Action component called handlePick() then inside our button we set up an onClick={this.handlePick}
// back inside our new function we add an < alert('handlePick'); > that flashes a message to the screen when we click on that button

// add our <form onSubmit={this.handleAddOption}> to the AddOption component, gave it an <input> with type and name and added <button>
// then above inside the component (CLASS METHOD) we defined handleAddOption(e) that took in our event
// defined a const variable called option and set it equal to e.target.elements.option.value.trim()
// set the if(option) to return our alert(option) which will display the value of option in the flash message, so if option exists (is true) then alert(option)

// Section 4 Lecture 30: METHOD HANDLE BINDING ON .this

// added: constructor(props) {
//          super(props);
//          this.handleRemoveAll = this.handleRemoveAll.bind(this);
//        }
// binds our (this) correctly to handleRemoveAll inside constructor method of the class object Options
// it only does this once when page first gets rendered. Why is this important? no idea


// Section 4 Lecture 31: WHAT IS COMPONENT STATE? (this.state)

// component state allows our components to manage data, when data changes, component will AUTOMATICALLY re-render
// no more manually calling render()
// we need a default state value
// component rendered with default state values
// change state based on event
// component re-rendering using new state values
// start at new value
// our component state is just an object, a set of key: value pairs
// this state object can changed off of some event
// like the finishing of an http event that gets some json data from an api

// SECTION 4 LECTURE 36: Setting State on INDECISION APP PT1

// We want to take the data like options and turn that into state
// to do that we define our constructor(props) on the class IndecisionApp
// add super(props) and then go ahead and set this.state = {}
// instead of referencing options array that we had defined, we ref this.state.options and then delete our const options

// props can get passed from a parent to a child, but our children cant pass props upstream
// to reverse that one way data flow, we are going to pass functions in as props
// we define a method below constructor that will then be able to call the function that can delete all the options from the array called handleDeleteOptions
// we pass this method down into the return in the <Options /> and add a new props
// now we will have access to this method via the prop name inside the options component
// Inside options we delete our constructor function and the handleRemoveAll
// then we change onClick method in the button ={this.props.handleDeleteOptions} we DO NOT CALL IT
// NOW, when the button gets clicked, it will call the handleDeleteOptions method, the method lives up top and that will wipe the state
// like all of our event handlers we bind this.handleDeleteOptions = this.handleDeleteOptions.bind(this); to bind to current instance

// LECTURE 37 Indecision PT2

// now we are trying to pass data up from our option form
// create new function handleAddOption that takes an argument

// components are all returned in the inside the constructor at the top. this is where we give our components access to the methods via this prop handleAddOption
// then we can call that prop down in the class AddOption
// we kept the handleAddOption(e) methods
// we are using .this inside of handleAddOption so we set up the constructor function
// we have two handleAddOption methods now, one built into the component and one passed down from the parent that will manipulate things in terms of that state

// ADDING FORM VALIDATION
// we add some conditional logic for adding options on handleAddOption
// add an if statement under handleAddOption(option)
// inside of our handleAddOption method inside the class AddOption we remove the if statement
// create a const error = set equal to whatever comes back this.props.handleAddOption(option);
// we then set component state on class AddOption because the error message is specific to the form object
// set this.state as a defualt value = { error: undefined }
// now when they do submit the form with an error we want to update the error state using this.setState and an updater function
// inside updater function we return our object and set error: error
// in ES6 when we have a property whos value comes from a variable of the same name we can leave it off so just {error} is fine
// so we are correctly setting the error, if it comes back as undefined we are wiping it, if it comes back as a string we are setting it
// we then put a jsx above our form {this.state.error && <p>{this.state.error}</p>} this checks if this.state.error is truthy or falsy (undefined is falsy)
// use the logical && operator to conditionally render a paragraph when the error is actually set
// inside <p> the text comes from the error itself {this.state.error}

// SECTION 5 LECTURE 40 STATELESS FUNCTIONAL COMPONENTS

// converting components to stateles functional components
// some are very simple presentational components, they do not need to be class state based components
// addOption uses state so it needs to remain a class based component
// new syntax is to make a constant that ends up being component name with UPPER CASE FIRST LETTER like const User
// we set it equal to a function arrow function or use function keyword
// this function is similar to the class components render methods
// then we just return our jsx inside the function
// stateless functional components do not have access to this. PROPS get passed in to the function (props)
// to convert a class based component to a stateless functional component:
// first create a new const and name it the same. the function is almost the same as render () so copy the return()
// scan jsx to make sure there is no this.

// OLD HEADER

// class Header extends React.Component {
//   render() {
//    console.log(this.props)
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// OLD ACTION class based components

// class Action extends React.Component {
//   // handlePick() {
//   //   alert('handlePick');
//   // }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// Class based components are for HANDLING STATE
// function based components are for showing things

// SECTION 5 LECTURE 43: Removing Individual Options
// we discovered new syntax for setting this.setState()
// on handleDeleteOptions we changed to this: this.setState(() => ({ options: [] }));
//
