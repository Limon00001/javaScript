// -------------------------------------- JavaScript Object Display -----------------------------------------------------

// to Display JavaScript Objects into HTML, use -->
/*
    ✔ document.getElementById("id_name")
    ✔ document.getElementByClass("class_name")
    ✔ document.querySelector("id/class/tag_name")
    ✔ document.querySelectorAll("id/class/tag_name")
*/


// Let's take an object:
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
  
document.getElementById("jsObjectDis-01").innerHTML = person;
// It displays [object object]


// solutions to display JavaScript objects are:
/*
    ✔ Displaying the Object Properties by name
    ✔ Displaying the Object Properties in a Loop
    ✔ Displaying the Object using Object.values()
    ✔ Displaying the Object using JSON.stringify()
*/

// Displaying the Object Properties by name:
document.getElementById("jsObjectDis-02").innerHTML =
person.name + ", " + person.age + ", " + person.city;

// Displaying the Object in a loop:
let display = "";

for (let x in person) {
display += person[x] + " ";
};

document.getElementById("jsObjectDis-03").innerHTML = display;
// must use person[x] in the loop.
// person.x will not work (Because x is a variable).


// Displaying the Object using Object.values:
// Any JavaScript object can be converted to an array using Object.values()
document.getElementById("jsObjectDis-04").innerHTML = Object.values(person);

// Displaying the Object using JSON.stringify():
// Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
document.getElementById("jsObjectDis-05").innerHTML = JSON.stringify(person);

// stringify dates:
// Dates also can be converted into string
person.today = new Date();
document.getElementById("jsObjectDis-06").innerHTML = JSON.stringify(person);


// stringify functions:
// But function can not be converted into string directly
person.fullInfo = function() {
    return `${this.name} is ${this.age} years old. He lives in ${this.city}.`
}
document.getElementById("jsObjectDis-07").innerHTML = JSON.stringify(person);

// Here need to convert function to string seperately
person.fullInfo = person.fullInfo.toString();
// or
// person.fullInfo = String(person.fullInfo);
document.getElementById("jsObjectDis-08").innerHTML = JSON.stringify(person);


// Stringify Arrays:
// also possible to stringify JavaScript arrays
const array = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(array);
document.getElementById("jsObjectDis-09").innerHTML = myString;