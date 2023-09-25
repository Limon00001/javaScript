// --------------------------------------- JavaScript Hoistings -----------------------------------------------------

/* 
    ✔ Hoisting is JavaScript's default behavior of moving declarations to the top.
    ✔ A variable can be used before it has been declared.
    ✔ JavaScript only hoists declarations, not initializations.
    ✔ var, let, const -> all are applicable for hoisting.
*/

/*
    let a;              // Declaration/Define
    a = 5;              // Assignment
    console.log(a);     // Usage
*/


// using var:
var one = `Bangladesh`;
console.log(one);       // Bangladesh


console.log(two);
var two = `Canada`;     // undefined
// Basically how it works?
/*
    In javaScript, all declarations are hoisted (to the top of the current script or the current function).
    var two = `Canada` converted like that -->
    var two;      // moving declaration to the top and set it's value undefined
    two = `Canada`;

    Program look like,
    var two;
    two = undefined;
    console.log(two);       // that's why it shows undefined
    two = `Canada`;
*/


// using let and const:
// Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// assigned undefined where let or const declare/define.
/*
    console.log(three);
    let three = `Finland`;      // ReferenceError

    Here -->
    console.log(three);
    let three;       // here undefined assigned and let hoisted to top
    three = `Finland`;

    In this case -->
    let three;
    console.log(three);
    three = undefined;
    three = `Finland`;

    Note: In that case first it is undefined and then the given value.
*/


let four;
console.log(four);      // undefined
// How it works?
/*
    let four;
    four = undefined;
    console.log(four);      // undefined
*/



// JavaScript Declarations are hoisted but Initializations are Not Hoisted:
var five = 5;   // Initialize five
var six = 6;    // Initialize six

console.log(five, " ", six);


var seven = 7;  // Initialize seven

console.log(seven, " ", eight);         // 7 undefined

var eight = 8;  // Initialize eight
/*
    var seven = 7;  // Initialize seven
    console.log(seven, " ", eight);         // 7 undefined
    var eight;      // declare
    eight = 8;      // Initialize eight


    // Then ->
    var seven = 7;  // Initialize seven
    var eight;      // declare
    console.log(seven, " ", eight);         // 7 undefined
    eight = 8;      // Initialize eight
*/




// According to let:
// let nine = 9;  // Initialize nine
// console.log(nine, " ", ten);         // ReferenceError
// let ten = 10;  // Initialize ten
/*
    let nine = 9;  // Initialize nine
    console.log(nine, " ", ten);         // ReferenceError
    let ten = 10;  // Initialize ten

    // Next ->
    let nine = 9;  // Initialize nine
    console.log(nine, " ", ten);         // ReferenceError
    let ten;    // declare
    ten = 10;   // Initialize ten

    // Next ->
    let nine = 9;  // Initialize nine
    let ten;    // declare
    console.log(nine, " ", ten);         // ReferenceError
    ten = undefined;   // assign undefined
    ten = 10;   // Initialize ten
*/



// Function hoisting:
// function also hoisted to top.

myFunction();
function myFunction(){
    accessories = `airpod`;
    var accessories;
    console.log(accessories);
}
// Basically it works:
/*
    function myFunction(){
        var accessories;
        accessories = `airpod`;
        console.log(accessories);
    }
    myFunction();
*/


// But ->
/*
    fun();
    const fun = function (){
        accessories = `airpod`;
        var accessories;
        console.log(accessories);
    }
    // Output: ReferenceError


    // It works like that -->
    const fun;
    fun();
    fun = undefined;
    fun = function (){
        var accessories;
        accessories = `airpod`;
        console.log(accessories);
    }
    // Output: ReferenceError
*/




// Note: Declare Variables At the Top. To avoid bugs, always declare all variables at the beginning of every scope.