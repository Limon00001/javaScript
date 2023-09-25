// --------------------------------------- JavaScript Use Strict -----------------------------------------------------

/*
    ✔ Can use strict mode in all your programs. It helps to write cleaner code, like preventing from using undeclared variables. "use strict" is just a string.
    ✔ Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
    ✔ Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
*/

"use strict";
/*
    x = 4;
    console.log(x);     // x is not defined/declared
*/


/*
    myFunction();
    function myFunction(){
        y = `Error`;
        console.log(y);     // y is not defined/declared
    }
*/


// Also use strict mode has local scope (inside the function is in strict mode)
/*
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
    "use strict";
    y = 3.14;   // This will cause an error. y is not defined.
    }
*/


// Using an object, without declaring it, is not allowed:
// x = {p1:10, p2:20};      // This will cause an error. x is not defined


// Deleting a variable (or object) is not allowed. 'delete' cannot be called on an identifier in strict mode.
/*
    let x = 3.14;
    delete x;                // This will cause an error.
*/


// Deleting a function is not allowed. 'delete' cannot be called on an identifier in strict mode.
/*
    function x(p1, p2) {};      // duplicating a parameter name is not allowed
    delete x;                 // This will cause an error.
*/


// Octal numeric literals are not allowed. Octal escape characters are not allowed.
// let x = 010;             // This will cause an error. Use -> 0o10
// let y = "\010;"             // This will cause an error. Use -> \x08


// Writing to a get-only property is not allowed.
/*
    const obj = {get x() {return 0} };
    obj.x = 3.14;            // This will cause an error. TypeError: Cannot set property x of #<Object> which has only a getter.
*/


// Deleting an undeletable property is not allowed.
// delete Object.prototype;    // This will cause an error


// eval, arguments cannot be used as a variable.
// let eval = 1;           // This will cause an error
// let arguments = 1;      // This will cause an error


// The "with" statement is not allowed.
// with (Math){x = cos(2)};     // This will cause an error


// For security reasons, eval() is not allowed to create variables in the scope from which it was called. Variable can not be used before it is declared.
/*
    eval ("x = 2");
    alert (x);      // This will cause an error
*/


// Reserved keywords for future JavaScript versions can NOT be used as variable names in strict mode.
/*
    ✔ Reserved Keywords: implements, interface, let, package, private, protected, public, static, yield

    let public = 1500;      // returns error because of reserved keywords
*/