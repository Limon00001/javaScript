// --------------------------------------- JavaScript Debugging -----------------------------------------------------


// Code Debugging:
/*
    ✔ Programming code might contain syntax errors, or logical errors.

    ✔ Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.

    ✔ Searching for (and fixing) errors in programming code is called code debugging.
*/


// JavaScript Debuggers:
/*
    ✔ Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.

    ✔ With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.
*/


// console.log() method:
let a = 5;
let b = 6;
let c = a + b;

console.log(c);


// Setting Breakpoints:
/*
    ✔ In the debugger window, you can set breakpoints in the JavaScript code.

    ✔ At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.

    ✔ After examining values, you can resume the execution of code (typically with a play button).

    ✔ First press 'F12' or 'CTRL+SHIFT+C' then go to source and select which line want to debugg.
*/


// The 'debugger' keyword:
/*
    ✔ The 'debugger' keyword stops the execution of JavaScript, and calls (if available) the debugging function.

    ✔ This has the same function as setting a breakpoint in the debugger.

    ✔ If no debugging is available, the debugger statement has no effect.

    ✔ With the debugger turned on, this code will stop executing before it executes the third line.
*/
// Example: -->
let x = 15;
let y = 5;
let z = x * y;

debugger;
console.log(z);