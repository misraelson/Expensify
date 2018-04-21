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
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// we are creating a new class Student that will inherit same properties as Person. In Ruby we would call super(name, age) in the initialize method of the class Student < Person
class Student extends Person {
  constructor(name, age, major = 'Undecided') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    // used the logical NOT operator flip it twice??
    return !!this.major;
  }
  // here we are overiding the same method from the Person class by defining the same method in the Student class 👇
  getDescription() {
    // by calling let description = super.getDescription(); we call that method
    let description = super.getDescription();

    // below if (this.hasMajor()) checks if student has major is true
    if (this.hasMajor()) {
      description += `..Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveller('Matthew', 33, 'Vancouver');
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
