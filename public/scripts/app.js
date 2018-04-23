'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in hands computer';
      var options = ['thing one', 'Thing two', 'Thing four', 'Thing 11'];
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
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
        'dix',
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
    key: 'handlePick',
    value: function handlePick() {
      alert('handlePick');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handlePick },
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
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      alert('She Gone');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleRemoveAll },
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
