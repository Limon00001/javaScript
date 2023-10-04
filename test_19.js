// --------------------------------------- JavaScript Performance -----------------------------------------------------

// Speed up javaScript codes:
/* Reduce Activity in Loops:

    ✔ Each statement in a loop, including the for statement, is executed for each iteration of the loop.
    ✔ Statements or assignments that can be placed outside the loop will make the loop run faster.
*/
// Example-01: Bad way
const animals = [`lion`, `tiger`, `bear`];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// This code accesses the length property of an array each time the loop is iterated.


// Example-02: Good way
const coffee = [`capaccino`, `latte`, `frappe`];

let length = coffee.length;
for (let i = 0; i < length; i++) {
    console.log(coffee[i]);
}
// This code accesses the length property outside the loop and makes the loop run faster.



// Reduce DOM Access:
/*
    ✔ Accessing the HTML DOM is very slow, compared to other JavaScript statements.
    ✔ If you expect to access a DOM element several times, access it once, and use it as a local variable:

    Example-03:
    const obj = document.getElementById("demo");
    obj.innerHTML = "Hello";
*/


// Reduce DOM Size:
/*
    ✔ Keep the number of elements in the HTML DOM small.
    ✔ This will always improve page loading, and speed up rendering (page display), especially on smaller devices.
    ✔ Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.
*/


// Avoid Unnecessary Variables:
// Don't create new variables if you don't plan to save values.
/*
    // Example-04: Bad way
    let fullName = firstName + " " + lastName;
    document.getElementById("demo").innerHTML = fullName;
    With this:

    // Example-05: Good practise
    document.getElementById("demo").innerHTML = firstName + " " + lastName;
*/