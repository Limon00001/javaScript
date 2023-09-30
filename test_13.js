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
    ✔ When used in an object method, 'this' refers to the object.
    ✔ In the example, 'this' refers to the person object.
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


// Implicit Function Binding:
// Example-01:
let player = {
    name: `Kaka`,
    position: `Midfilder`,
    nationality: `Brazilian`,
    player: function () {
        console.log(`The player name is ${this.name}. He played as a ${this.position} and his nationality is ${this.nationality}.`)
    }
}
player.player();
// Here in implicit binding, first check where function call. If there is a dot(.) before callback function, that imediate object property refer 'this'.


// Example-02:
let player2 = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: `Mr. Someone`,
            printName: function () {
                console.log(this.name);
            }
        }
    };
};
let ozil = player2(`Ozil`, 38);
ozil.printName();
ozil.father.printName();
// Here in implicit binding, first check where function call. If there is a dot(.) before callback function, that imediate object property refer 'this'.



// Explicit Function Binding:
/*
    ✔ The call() and apply() methods are predefined JavaScript methods.
    ✔ They can both be used to call an object method with another object as argument.
*/
// Example-01: call()
let player3 = function (virtue1, virtue2, virtue3) {
    console.log(`${this.name} is ${this.age} years old. He is very ${virtue2}, ${virtue3} and ${virtue1} also.`);
}

let sadio = {
    name: `Sadio Mane`,
    age: 34,
};

let virtue1 = `good human being`;
let virtue2 = `humble`;
let virtue3 = `good player`;

player3.call(sadio, virtue1, virtue2, virtue3);
// call() can recieve infinity arguments as 2nd parameter


// Example-02: call()
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


// Example-03: apply()
let player4 = function (virtue4, virtue5, virtue6) {
    console.log(`${this.name} is ${this.age} years old. He is very ${virtue5}, ${virtue6} and ${virtue4} also.`);
}

let silva = {
    name: `Thiago Silva`,
    age: 39,
};

let virtue4 = `good human being`;
let virtue5 = `humble`;
let virtue6 = `good player`;

let arr = [virtue4, virtue5, virtue6];      // store all virtue inside an array

player3.apply(silva, arr);


// Function Borrowing:
// With the bind() method, an object can borrow a method from another object.
// bind() same as call()
// Example-01:
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


  // Window binding:
  let player5 = function () {
    console.log(this.name);     // 'this' refer to window object by default
  }

  let ramos = {
    name: `Sergio Ramos`,
    age: 40,
  };

  player5();    // undefined



//   Note: call(), apply() & bind() only applicable for normal function