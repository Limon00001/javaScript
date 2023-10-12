// -------------------------------------- JavaScript Object Prototypes -----------------------------------------------------

// constructor function
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ` ` + this.lastName;
    }
}
  
const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Sally", "Rally", 48);

console.log(myFather.fullName());
console.log(myMother.fullName());

// can NOT add new property or method to existing object constructor
/*
    Person.nationality = `American`;
    console.log(Person);
*/


// To add new property or method to constructor
// Sometimes need to add new properties (or methods) to an object constructor.
// adding new property to constructor
Person.prototype.nationality = `American`;
console.log(myFather.nationality);
console.log(myMother.nationality);
// Here all JavaScript objects inherit properties and methods from a prototype. Also Person objects inherit from Person.prototype

// adding new methods to constructor
Person.prototype.origin = function() {
    return `${this.fullName()} is an ${this.nationality}.`
};
console.log(myFather.origin());
console.log(myMother.origin());



// NOTE: IMPORTANT !!
// Only modify own prototypes. Never modify the prototypes of standard JavaScript objects.
// Example:
String.prototype.garbage = function() {
    return`This is strictly prohibited.`
}

let str = `Unallowed`

console.log(str.garbage());