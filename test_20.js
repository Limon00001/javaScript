// --------------------------------------- JavaScript Problem Set-01 -----------------------------------------------------

// Example-01: Get random number between 1 to 6
function getRandNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRandNumber(1, 6));


// Example-02: sort alphabetically
const actressNames = [`Anna De Armes`, `Elezabeth Olsen`, `Gal Gadot`, `Angelina Jolie`, `Karen Gillan`, `Kat Dennings`, `Florence Pugh`];

console.log(actressNames.sort());
// Note: array.sort() method changes the main array also.


// Example-03: sort numbers in ascending and descending way
const numbers = [40, 100, 1, 5, 25, 10];

const ascFunction = (a, b) => a - b;        // ascending function
const descFunction = (a, b) => b - a;       // descending function

console.log(numbers.sort(ascFunction));
console.log(numbers.sort(descFunction));


// Example-04: Find a year which is a leap year or not
/*  Conditions: -->
    ✔ The year is multiple of 400.
    ✔ The year is a multiple of 4 and not a multiple of 100.
*/
const isLeapYear = (year) => {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`)
    }
}

// pass any year
isLeapYear(2026);
isLeapYear(2028);


// To determine vowels from sentence
const vowels = [`a`, `e`, `i`, `o`, `u`, `A`, `E`, `I`, `O`, `U`];

function countVowels (sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value) {
        if(vowels.includes(value)) {
            count++;
        }
    });

    return count;
}

console.log(countVowels(`How to determine vowels from any sentence.`));


// To determine duplicate & non-duplicate numbers from array
const numberArray = [1, 4, 7, 7, 4, 9, 12, 99, 1, 5, 3];

// for duplicate numbers
const duplicates = numberArray.filter(function(value, index, array) {
    return array.indexOf(value) !== index;
})

console.log("Duplicate Numbers: ", duplicates);

// for non-duplicate numbers
const nonDuplicates = numberArray.filter(function(value, index, array) {
    return array.indexOf(value) === index;
})

console.log("Non-Duplicate Numbers: ", nonDuplicates);