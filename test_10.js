// --------------------------------------- JavaScript Scope -----------------------------------------------------

/* JavaScript has 3 types of scope:

    ✔ Block scope
    ✔ Function scope
    ✔ Global scope
*/


// Block Scope:
// ES6 introduced two important new JavaScript keywords: let and const. These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block. Such as ->
    {
        let a = `Hello!`;
        console.log("Inside Block scope:", a);
    }
    // console.log("Outside Block scope:", a);     // Output: a is not defined

// But var keyword don't provide block scope. it can be used outside the block scope.
    {
        var a = `This is a global scope!`;
        console.log("Inside Block scope:", a);
    }
    console.log("Outside Block scope:", a);
// Note: We can assign same variable for two dofferent block scope



// Local Scope:
// Variables declared within a JavaScript function, become LOCAL to the function.
function A(){
    let laptop = `ASUS`;
    // Can use 'laptop' variable rest of the code
}
    // Can not use 'laptop' vaiable outside of the function but can call the entire function


// Function Scope:
// Variables defined inside a function are not accessible from outside the function. Variables declared with var, let and const are similar when declared inside a function. They all have Function Scope.
function Ride(){
    var bike = `Royal Enfield`;
    let car = `Marcedes`;
    const airplane = `USBangla`;
    console.log(bike, car, airplane);
}
// console.log(bike, car, airplane);      // returns not defined
Ride();


// Global Scope:
// A variable declared outside a function or declare globally all scripts and functions on a web page can access it.
let animal = "snake";
// can use 'animal' variable
console.log(animal);

function Animal() {
// can also use 'animal' variable also
console.log(animal);
}
Animal();


// Automatically Global:
// If assign a value to a variable (var, let, const) that has not been declared, it will automatically become a GLOBAL variable.
// Note: Recommendation for not to use
function device(){
    mobile = `iPhone`;
    console.log(mobile);
}
device();
console.log(mobile);



// Global Variables in HTML:
/* In HTML, the global scope is the window object. Global variables defined with the var keyword belong to the window object.
    var country = `Bangladesh`;
    console.log(window.country);     // returns Bangladesh
*/

/* Global variables defined with the let keyword do not belong to the window object.
    let country = `Bangladesh`;
    console.log(window.country);    // returns undefined
*/



// The Lifetime of javaScript variables:
// The lifetime of a JavaScript variable starts when it is declared such as -> let x . Function (local) variables are deleted when the function is completed. In a web browser, global variables are deleted when you close the browser window (or tab).