// -------------------------------------- JavaScript Object Constructor -----------------------------------------------------

// constructor:
// constructor function is a blueprint/template that can use many times.
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ` ` + this.lastName;
    }
}
// Good practice to name constructor functions with an upper-case first letter.

// pass the values
const emma = new Person(`Emma`, `Watson`, 25);
const tom = new Person(`Tom`, `Hiddleston`, 30);
const sally = new Person(`Sally`, `Rally`, 35);

console.log(emma);
console.log(tom);
console.log(sally);


// Adding property:
emma.eyeColor = `Blue`;

console.log(emma);

// Adding method:
emma.emmaInfo = function() {
    return `${this.firstName} ${this.lastName} eye color is ${this.eyeColor}`;
};

console.log(emma.emmaInfo());

// But can NOT add property or method to an object constructor. Like -> Person.eyeColor or Person.info = function() {...} can NOT do this. This is prohibited.


// manipulate the value
emma.changeName = function (name) {
    return this.lastName = name;
}

console.log(`${emma.firstName} ${emma.changeName(`Stone`)}`);


// Built-in JavaScript COnstructor
/*
    new String()
    new Number()
    new Boolean()
    new Object()
    new Array()
    new RegExp()
    new Function()
    new Date()
*/