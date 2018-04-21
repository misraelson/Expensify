'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return this.name + ' is ' + this.age + ' year(s) old.';
    }
  }]);

  return Person;
}();

// we are creating a new class Student that will inherit same properties as Person. In Ruby we would call super(name, age) in the initialize method of the class Student < Person


var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age) {
    var major = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Undecided';

    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      // used the logical NOT operator flip it twice??
      return !!this.major;
    }
    // here we are overiding the same method from the Person class by defining the same method in the Student class 👇

  }, {
    key: 'getDescription',
    value: function getDescription() {
      // by calling let description = super.getDescription(); we call that method
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

      // below if (this.hasMajor()) checks if student has major is true
      if (this.hasMajor()) {
        description += '..Their major is ' + this.major + '.';
      }

      return description;
    }
  }]);

  return Student;
}(Person);

var Traveller = function (_Person2) {
  _inherits(Traveller, _Person2);

  function Traveller(name, age, homeLocation) {
    _classCallCheck(this, Traveller);

    var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveller, [{
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getGreeting', this).call(this);

      if (this.homeLocation) {
        greeting += ' I am visiting from ' + this.homeLocation + '.';
      }

      return greeting;
    }
  }]);

  return Traveller;
}(Person);

var me = new Traveller('Matthew', 33, 'Vancouver');
console.log(me.getGreeting());

// const me = new Person('Matthew', 33);
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());


// In RUBY:
// class Person
//  def initialize(name)
//    @name = name
//  end
// me = Person.new('Matthew')
