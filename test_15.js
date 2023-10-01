// --------------------------------------- JavaScript Classes -----------------------------------------------------

// javaScript classes:
/*
    ✔ JavaScript Classes are templates for JavaScript Objects.
    ✔ Use the keyword 'class' to create a class and always add a method named constructor().
*/


// class syntax:
/*
    class ClassName {
        constructor() {

        }
    }
*/


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

// Here above the example, creates a class named "Person".
// The class has two initial properties: "name" and "age".


// Note: -->
/*
  ✔ A JavaScript class is not an object.
  ✔ It is a template for JavaScript objects.
*/


// Constructor method:
/*
  ✔ It has to have the exact name "constructor"
  ✔ It is executed automatically when a new object is created
  ✔ It is used to initialize object properties

  ✔ If you do not define a constructor method, JavaScript will add an empty constructor method.
*/


// Using class:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

let person1 = new Person (`Tom`, 38);
let person2 = new Person (`Jack`, 36);

console.log(person1);
console.log(person2);


// class methods:
/*
  Use the keyword 'class' to create a class.
  Always add a constructor() method.
  Then add any number of methods.
*/

// Syntax:
/*
  class ClassName {
      constructor() { ... }
      method_1() { ... }
      method_2() { ... }
      method_3() { ... }
  }
*/


// Example-01: using method
class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    action () {
        console.log(`${this.name} is ${this.age} years old.`)
    }
}

let player1 = new Player (`Ozil`, 39);
let player2 = new Player (`Kaka`, 40);

player1.action();
player2.action();



// Example-02: using method
class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    point (movie) {
        console.log(`${this.name} is ${this.age} years old. His oscar winning movie is ${movie}`)
    }
}

let actor1 = new Actor (`DeCaprio`, 45);
let actor2 = new Actor (`Hanks`, 55);

actor1.point(`Revenant`);
actor2.point(`Forest Gumps`);