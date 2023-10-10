// -------------------------------------- JavaScript Object Methods -----------------------------------------------------

// Example-01:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

// accessing object method:
console.log(person.fullName());

// If access the fullName property, without (), it will return the function definition
console.log(person.fullName);

// Adding method:
person.info = function () {
    return this.firstName + " " + this.lastName + " & his id is: " + this.id;
};

console.log(person.info());


// Using Built-In Methods:
// Example-02:
// As fullName() finction retuns a string, we can pass a string method
person.fullName = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.fullName());