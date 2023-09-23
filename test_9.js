// --------------------------------------- JavaScript Errors -----------------------------------------------------

/*
  JavaScript Errors:
  ✔ EvalError: An error has occurred in the eval() function. Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.
  ✔ RangeError: A number "out of range" has occurred.
        console.log((1).toPrecision(500));   // RangeError: toPrecision() argument must be between 1 and 100

  ✔ ReferenceError: An illegal reference has occurred.
        let x = 5;
        x = y + 1;
        console.log(x);     // ReferenceError: y is not defined

  ✔ SyntaxError: A syntax error has occurred.
        console.log("Hello!);      // SyntaxError: Invalid or unexpected token

  ✔ TypeError: A type error has occurred.
        console.log((5).toUpperCase());     // TypeError: number can't be converted into uppercase

  ✔ URIError (Uniform Resource Identifier): An error in encodeURI() has occurred. Illegal characters in a URI function.
        console.log(decodeURI("%%%"));      // URIError: URI malformed
*/



/*
  when error occurs, JavaScript provides error information as an Object.
  The error object provides two useful properties: ✔ name  -> returns error name.
                                                   ✔ message  -> returns error message.

  // Error name:
  try{
    adddlert("Welcome guest!");
  } catch (err) {
    console.log(err.name);      // ReferenceError
  }

  // Error message:
  try{
    adddlert("Welcome guest!");
  } catch (err) {
    console.log(err.message);      // adddlert is not defined
  }
*/


/* Error Handle:
  ✔ try: It defines a code block to run. (to try)
  ✔ catch: It defines a code block to handle error.
  ✔ throw: It defines custom errors (made by programers).
  ✔ finally: It defines a code block which will run always.
*/



// try, catch, throw and finally:
/*
  The try statement allows you to define a block of code to be tested for errors while it is being executed. 
  The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
  The throw statement allows you to create a custom error. The exception can be JavaScript String, a Number, a Boolean or an Object.
  The finally statement lets you execute code, after try and catch, regardless of the result.
*/
// Example-1: Input Validation
let x = ``;

try {
  if(x == ``) throw `empty`;
  if(isNaN(x)) throw `not a number`;
  x = Number(x);
  if(x < 5) throw `too low`;
  if(x > 15) throw {
    message: `too high`,
    name: `HighError`
  };
} catch (err){
  console.log(err);
}
finally {
  console.log(`Thank You!`);
};


// Example-2:
let X = 45;
try {
  if(X == 45) throw true;    // exception can be boolean also
} catch (err){
  console.log(err);
}
finally {
  console.log(`Nice Work`);
}