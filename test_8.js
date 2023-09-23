// --------------------------------------- JavaScript Operator Precedence -----------------------------------------------------

/*
  Expressions in parentheses are computed before the rest of the expression. Function are executed before the result is used in the rest of the expression.
*/


// Some precedence given below: ---------->


// parenthesis ():
// Multiplication has precedence over addition.But parenthesis has precedence over multiplication.
console.log((100 + 50) * 3);

// . operator:
const laptop = {model:"apple", color:"white", gen:"corei7"};
console.log(laptop.gen);

// ?. operator:
console.log(laptop?.model);

// delete operator:
delete laptop.color;
console.log(laptop.color);

// function ():
function myFunction(n, m) {
  return n * m;
}
let result = myFunction(5, 9);
console.log(result);

// new with argument:
// A Date object can be created with a specified date and time
const date = new Date("June 6, 2022");
console.log(date);

// new with argument:
// new Date() without arguments, creates a date object with the current date and time
let d = new Date();
console.log(d);



// Increment Operators
// Postfix increments are executed before prefix increments

// postfix increment i.e. i++
// y is incremented after it is assigned to x (post-incremented).
let y = 5;
let x = y++;
console.log(`postfix increment:`, x);
console.log(`postfix increment:`, y);

// postfix decrement i.e. i--
// w is decremented after it is assigned to v (post-decremented).
let w = 5;
let v = w--;
console.log(`postfix decrement:`, v);
console.log(`postfix decrement:`, w);

// prefix increment i.e. ++i
// y is incremented after it is assigned to x (pre-incremented).
let p = 5;
let q = ++p;
console.log(`prefix increment:`, p);
console.log(`prefix increment:`, q);

// postfix decrement i.e. i--
// w is decremented after it is assigned to v (post-decremented).
let s = 5;
let t = --s;
console.log(`prefix decrement:`, s);
console.log(`prefix decrement:`, t);

// In operator:
let isTrue = `PI` in Math;
console.log(`Is "PI" a property of Math?:` ,isTrue);

// Conditional (ternary) Operator:
let age = 12;
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable + " to vote.");