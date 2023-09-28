// --------------------------------------- JavaScript this keyword -----------------------------------------------------

/**
    ✔ 'this' keyword refers to an object.
    ✔ The 'this' keyword refers to different objects depending on how it is used.
    ✔ Alone 'this' keyword refers to the global object also.
    ✔ In a function, 'this' refers global object.
    ✔ In a function, in strict mode, 'this' is undefined.
    ✔ In an event, 'this' refers to the element that received the event.
    ✔ Methods like call(), apply(), and bind() can refer this to any object.
*/


// 'this' in a method:
/*
    ✔ When used in an object method, this refers to the object.
    ✔ In the example, this refers to the person object.
*/
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName());


// 'this' Alone:
/*
  When used alone, 'this' refers to the global object.
  Because 'this' is running in the global scope.
  In browser window, the global object is [object Window].
*/
// console.log(this);       // window


// 'this' in a function:
// returns [object Window].
/*
    function one() {
        return this;
    }
    console.log(`function:`, one());        // Window
*/


// 'this' in event handler:
// In HTML event handlers, this refers to the HTML element that received the event.
/*
    <button onclick="this.style.display='none'">
    Click to Remove Me!
    </button>

    // Here this refers to button
*/


// Explicit Function Binding:
/*
    ✔ The call() and apply() methods are predefined JavaScript methods.
    ✔ They can both be used to call an object method with another object as argument.
*/
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Snow",
  }
  
  // Return "John Snow"
console.log(person1.fullName.call(person2));


// Function Borrowing:
// With the bind() method, an object can borrow a method from another object.
const person3 = {
    firstName:"John",
    lastName: "Doe",
    age: 34,
    fullName: function () {
      return this.firstName + " " + this.lastName + " " + this.age;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
    age: 50,
  }
  
  let full = person3.fullName.bind(member);
  console.log(full());