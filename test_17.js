// --------------------------------------- JavaScript JSON -----------------------------------------------------

// JSON: -->
/*
    ✔ JSON is a format for storing and transporting data.
    ✔ JSON is often used when data is sent from a server to a web page.
    ✔ JSON stands for JavaScript Object Notation.
    ✔ JSON is a lightweight data interchange format.
    ✔ JSON is language independent. It is supported by all programing language.
    ✔ JSON is "self-describing" and easy to understand.
    ✔ JSON names require double quotes. JavaScript object names do not.

    // Note: The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.
*/


// JSON example:
/*
    {
        "employee":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
        ]
    }

    // It is always a text format.
*/


// JSON Syntax Rules:
/*
    Data is in name/value pairs. Such as -> "firstName":"John"
    Data is separated by commas. Such as -> "firstName":"John", "lastName":"Doe"
    Curly braces hold objects. Such as -> {"firstName":"John", "lastName":"Doe"}
    Square brackets hold arrays. Such as ->
        "employee":[
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
            ]
*/


// Converting JSON Text to JavaScript Object:
// JavaScript built-in function JSON.parse() to convert the text into a JavaScript object.
let str = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(JSON.parse(str));


// Converting JavaScript Object to JSON Text:
// JavaScript built-in function JSON.stringify() to convert the text into a JavaScript object.
let obj = { employees: [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]};

console.log(JSON.stringify(obj));