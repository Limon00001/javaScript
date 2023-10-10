// -------------------------------------- JavaScript Object Properties -----------------------------------------------------

// JavaScript Objects are Mutable. They are addressed by reference, not by value.
// Example-01:
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  }
  
const x = person;   // Here x and person are same object
x.age = 10;      // Will change both x.age and person.age
console.log(x);
// The object x is not a copy of person. It is person. Both x and person are the same object. Any changes to x will also change person, because x and person are the same object.


// Accessing JavaScript Properties
console.log(person.age);
console.log(person['age']);


// 'for...in' loop:
/*
  ✔ The JavaScript 'for...in' statement loops through the properties of an object.
  ✔ The block of code inside of the 'for...in' loop will be executed once for each property.
*/
let output = [ ];
for (let element in person) {
  output.push(person[element]);     // push works for array only
}

console.log(output);


// Adding New Properties to Object:
person.gender = `Male`;
console.log(person);


// Deleting properties:
delete person.age;      // can also be person['age']
console.log(person);


// Nested Object:
const student = {
    name: `Andre`,
    gender: `Male`,
    havefriends: {
        friendOne: `Lucifer`,
        friendTwo: `Elizabeth`,
        friendThree: `Sanchez`,
    }
}


// Accessing nested Object:
console.log(student.havefriends.friendOne);
// Or
console.log(student.havefriends[`friendTwo`]);
// Or
console.log(student[`havefriends`][`friendThree`]);


// Nested Arrays and Object:
const Leo = {
  pofession: "Businessman",
  age: 40,
  haveCars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}


// Accessing arrays using 'for...in' loop:
let nesArrays = "";

for (let i in Leo.haveCars) {
  nesArrays += Leo.haveCars[i].name + ` `;
  for (let j in Leo.haveCars[i].models) {
    nesArrays += Leo.haveCars[i].models[j] + ` `;
  }
}

console.log(nesArrays);