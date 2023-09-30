// --------------------------------------- JavaScript Arrow function -----------------------------------------------------

/*
    ✔ Arrow functions were introduced in ES6.
    ✔ Arrow functions allow us to write shorter function syntax.
*/


// Normal function:
let one = function() {
    return "Hello World!";
  }
console.log(one());


// With Arrow function:
one = () => {
    return "Hello World again!";
  }
console.log(one());


// If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
let two = () => `This is second text`;
console.log(two());


// If function has parameters, pass them inside the parentheses.
let three = (val) => `This is third text. ` + val;
console.log(three(`Congratulations!`));


// In fact, if you have only one parameter, you can skip the parentheses as well:
let four = val => `This is fourth text. ` + val;
console.log(four(`Congratulations!`));


// 'this' in arrow function:
/*
  ✔ In regular functions the 'this' keyword represented the object that called the function, which could be the window, the document, a button or whatever.
  ✔ With arrow functions the 'this' keyword always represents the object that defined the arrow function.
*/
// using regular function:
let javaScript = {
    name: `JavaScript`,
    frameWorks: [`React JS`, `Angular JS`, `Vue JS`],
    javaScript: function () {
        // let self = this;         // object reference
        this.frameWorks.forEach(function (element) {
            console.log(`${element} is a ${this.name} framework.`)
        });
    }
}
javaScript.javaScript();
// Inside the foreach callback function 'this' keyword can not identify the parent object. We need reference to indicate the parent object outside the foreach function. But this is not appropiate way. For this reason to avoid this complexity we need to use arrow function.


// using arrow function:
let javascript = {
    name: `javaScript`,
    frameWorks: [`React JS`, `Angular JS`, `Vue JS`],
    javascript: function () {
        this.frameWorks.forEach( (element) => {
            console.log(`${element} is a ${this.name} framework.`)
        });
    }
}
javascript.javascript();
// Arrow function doesn't care about 'this'. It always indicate the parent object.



// arrow function in HTML:
/*
    HTML -->

    <input class='search' placeholder='test'>
    <p class='result'></p>
    <p class='thanks'></p>


    javaScript -->

    let searchInput = document.queryselector('.search');
    let display = document.queryselector('.result');
    let thanks = document.queryselector('.thanks');

    // using normal function [won't work]:
    function show () {
        display.innerHTML = this.value;
        setTimeout(function () {
            thanks.innerHTML = `You have typed: ${this.value}`;
        }, 1000);
    }
    // setTimeout is a built-in function. so here 'this' refers to setTimeout and as it is a built-in function so it returns window object.


    // using normal function [will work]:
    function show () {
        display.innerHTML = this.value;
        setTimeout(() => {
            thanks.innerHTML = `You have typed: ${this.value}`;
        }, 1000);
    }


    // using arrow function
    // const showme = () => {
        // display.innerHTML = this.value;
    // };
    // Here 'this' refers to the window so it returns window object.


    searchInput.addEventListener("keyup", show);
*/