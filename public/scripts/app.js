'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// the goal is to use classes to reuse code. we are going to define a class which is like a blueprint and we are going to make multiple instances of that class for the individual items
// create a person class

// we are creating classes as we did in Ruby this is the JS way
// inside the constuctor is our arguement default where we set something if name is not set
var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }
  // these are our class functions


  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      // return 'Hi';
      // return 'Hi i am ' + this.name + '!';
      // to return a TEMPLATE STRING we use BACKTICKS
      // we then do some string interpolation with the ${} syntax, inside of which we can put anything
      return 'Hi. I am ' + this.name + '!';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' year(s) old';
    }
  }]);

  return Person;
}();

var me = new Person('Matthew', 33);
console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());


// In RUBY:
// class Person
//  def initialize(name)
//    @name = name
//  end
// me = Person.new('Matthew')
