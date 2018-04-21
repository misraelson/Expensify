// the goal is to use classes to reuse code. we are going to define a class which is like a blueprint and we are going to make multiple instances of that class for the individual items
// create a person class

// we are creating classes as we did in Ruby this is the JS way
// inside the constuctor is our arguement default where we set something if name is not set
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  // these are our class functions
  getGreeting() {
    // return 'Hi';
    // return 'Hi i am ' + this.name + '!';
    // to return a TEMPLATE STRING we use BACKTICKS
    // we then do some string interpolation with the ${} syntax, inside of which we can put anything
    return `Hi. I am ${ this.name }!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

const me = new Person('Matthew', 33);
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
