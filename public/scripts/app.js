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
    _this.state = {
      options: ['thing one', 'Thing two', 'Thing four', 'Thing three']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
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
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in hands computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// a react component is just an es6 class
// we use the global REACT with the COMPONENT class value which gives us all the react features
// REact components all REQUIRE one method: render


var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',

    // handlePick() {
    //   alert('handlePick');
    // }
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          'What should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'Remove All'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();

      if (option) {
        alert(option);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
//
