// --------------------------------------------- Constructor ----------------------------------------------------


// The constructor method is a special method of a class for creating and initializing an object instance of that class.

let s = "John".constructor                // Returns function String()  {[native code]}
let n = (3.14).constructor                // Returns function Number()  {[native code]}
let b = false.constructor                 // Returns function Boolean() {[native code]}
let a = [1,2,3,4].constructor             // Returns function Array()   {[native code]}
let o = {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
let d = new Date().constructor            // Returns function Date()    {[native code]}
let fu = function () {}.constructor 

console.log(s);
console.log(n);
console.log(b);
console.log(a);
console.log(o);
console.log(d);
console.log(fu);




// check the constructor property to find out if an object is an Array (contains the word "Array"):

// 1st method:
function isArray(myArray) {
    console.log(myArray.constructor.toString().indexOf("Array") > -1);
}
isArray([1, 2, 3, 4]);
// Output: true

// Let's decode this =>  console.log(myArray.constructor.toString().indexOf("Array") > -1);
// myArray.constructor;   ---->   returns Pascal Case function Array()
// myArray.constructor.toString();   ---->   constructor returns function and have to convert it to string.
// myArray.constructor.toString().indexOf("Array") > -1;   ----->  if Array present then it becomes true otherwise false.


// 2nd method: (Simpler)
function isArray(myArray) {
    console.log(myArray.constructor === Array);
  }
  isArray([5, 4, 1]);   // Output: true
  isArray((5, 4, 1));   // Output: false





//   Undefined:

// console.log(arr);     ------->    returns undefined
// Also can create the value undefined also:
let car = "Volvo";
car = undefined;
console.log(car);    // Output: undefined



//   Empty Values:

let empty = "";
console.log(empty);    // Output:
console.log(typeof empty);    // Output: string




// Null:

/*
✔ In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
✔ In JavaScript, the typeof null is an object.
*/
let person = {firstName:"Ibne", lastName:"Sina", age:50, eyeColor:"red"};
person = null;
console.log(person);            // Output: null
console.log(typeof person);     // Output: object


// Difference Between Undefined and Null: --->
console.log(typeof undefined);           // Output: undefined
console.log(typeof null);                // Output: object

console.log(null === undefined);         // Output: false
console.log(null == undefined);          // Output: true





// Instanceof Operator:
const animals = ["snake", "lizard", "girl"];

console.log(animals instanceof Array);        // Output: true
console.log(animals instanceof Object);       // Output: true
console.log(animals instanceof String);       // Output: false
console.log(animals instanceof Number);       // Output: false





// Void Operator:

/*
When a function is void, it means that the function returns nothing similar as undefined.
////////////////////////////////////////////////
const result = void(1 + 1);
console.log(result);     returns --> undefined
////////////////////////////////////////////////

javascript:void(0): Use this if, when a link is clicked, you don’t want the browser to load a new page or refresh the same page (depending on the URL specified).
Use void(0) means, do nothing - don't reload, don't navigate, do not run any code.


use this code:
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Operators</h1>
<h2>The void Operator</h2>

<p>
<a href="javascript:void(0);">Useless link</a>
</p>

<p>
<a href="javascript:void(document.body.style.backgroundColor='red');">
Click me to change the background color of body to red.</a>
</p>
<a href="javascript:void(document.body.style.backgroundColor='green');">
Click me to change the background color of body to green.</a>
<a id='link' href="javascript:void(
  document.querySelector('#link').style.color = 'green')">Link</a>
</p>

</body>
</html>
*/




// Learn more: https://www.freecodecamp.org/news/javascript-void-keyword-explained/