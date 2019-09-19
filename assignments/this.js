/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - the value is the window or console presented.
* 2. Implicit Binding - the object containing 'this'.
* 3. New Binding - creates a new object out of a constructor function.
* 4. Explicit Binding - groups methods using call / apply.
*
* write out a code example of each explanation above
*/

// Principle 1: Global

console.log(this) // returns 'undefined', because its too broad, but still working

// Principle 2: Implicit

const myObj = {
  greeting: 'Hello',
  speak: function(){
      return `${this.greeting}, world!`
  }
};
console.log(myObj.speak());

// Principle 3: New

function Person(obj){
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function(){
      return `Hello, my name is ${this.name}, and I am ${this.age} years old!`
  }
}
const hysen = new Person({name: 'Hysen', age: 31});
const olivia = new Person({name: 'Olivia', age: 1});

console.log(hysen.speak());
console.log(olivia.speak());

// Principle 4: Explicit

hysen.speak.call(olivia)
olivia.speak.apply(hysen);