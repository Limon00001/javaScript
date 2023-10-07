// --------------------------------------- JavaScript Problem Set-02 -----------------------------------------------------

// Example-01: How many times "doctors" used in the following sentence and what is the first "doctors" index number?
const sentence = `Doctors all over the world are given the stature next to God. It happens so mostly because they are lifesavers who work tirelessly for mankind. Moreover, being a doctor is considered one of the most sought-after professions. People want their kids to become doctors and they instill this dream in them from an early age.Doctors have a very noble profession. In addition, they are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures. Doctors require medical staffs that help them in performing their treatment. They are very proficient and have proved their importance time and again for Mankind .`;

let matches = sentence.match(/doctors/ig);
let count = function() {
    if(matches) {
        return matches.length;
    } else {
        return 0;
    }
}

console.log(count());

// return 1st position
let position = sentence.search(/doctors/ig);
let positionCount = function() {
    if(position >= 0) {
        return position;
    } else {
        return `Sorry! Not Found!`;
    }
}

console.log(positionCount());


// Example-02:
// Input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// Output: 2 or not found.
// Impliment this

// 1st method:
function linearSearch(arr, val) {
    let foundIndex = -1; // Initialize with a value that indicates the element was not found
    
    arr.forEach(function(current, index) {
        if (current === val && foundIndex === -1) {
            foundIndex = index; // Update foundIndex only if it's the first occurrence of the target element
        }
    });
    
    if (foundIndex !== -1) {
        return foundIndex;
    } else {
        return 'Not Found!';
    }
}

let array = ['a', 'b', 'c', 'd', 'c'];
let targetElement = 'c';

console.log(linearSearch(array, targetElement));


// 2nd method:
function linearSearchSecond(arr, val) {

    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }

    return `Not Found!`;
}

console.log(linearSearchSecond(['a', 'b', 'c', 'd', 'c'], 'c'));



// Example-03: Find the largest string and its index from an array
function findLongestString(arr) {
    let longestString = '';
    
    arr.forEach(function(str) {
        if (str.length > longestString.length) {
            longestString = str;
        }
    });
    
    return [longestString, arr.indexOf(longestString)];
}

let fruits = ['apple', 'banana', 'kiwi', 'orange', 'strawberry'];

console.log('Longest string in the array is:', findLongestString(fruits));


// 2nd method:
function longestStringSecond(names){
    let longestWord = '';
    
for(let nameVal of names) {
    if(nameVal.length > longestWord.length) {
        longestWord = nameVal;
    }
}

return [longestWord, names.indexOf(longestWord)];
}

console.log(longestStringSecond(['Clayton White', 'Liberty Hill', 'Idir Kaloki', 'Ellie Lee', 'Leon King', `Charolette Robertson`]));



// Example-04: To determine numbers from 1 to 100 are divisible by both 3 and 5 and only 3, 5 also?
for (let i = 1; i <= 100; i++) {
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
        console.log(`${i} is divisible by both 3 and 5`);
    } else if (divisibleBy3) {
        console.log(`${i} is divisible by 3 only`);
    } else if (divisibleBy5) {
        console.log(`${i} is divisible by 5 only`);
    } else {
        console.log(i);
    }
}


// Example-05: Remove falsy value from an array
/*
    Falsy values -> `undefined, null, false, 0, '', NaN`
*/
// 1st method:
const fullArray = [`javaScript`, undefined, ``, false, 55, `python`, true, NaN, `stack`, null];

const filterArray = fullArray.filter(function(element) {
    if(element) {
        return true;
    } else {
        return false;
    }
});

console.log(filterArray);


// 2nd method: using Boolean
const filterArraySecond = fullArray.filter(Boolean);
// here Boolean method simply return true or false

console.log(filterArray);



// Example-06: Remove falsy value from object
/*
    Falsy values -> `undefined, null, false, 0, '', NaN`
*/
const fullObject = {a: `javaScript`, b: undefined, c: ``, d: false, e: 55, f: `python`, g: true, h: NaN, i: `stack`, j: null};

const filterObject = function(fullObject) {
    for(let iteration in fullObject) {
        if(!fullObject[iteration]) {
            delete fullObject[iteration];
        }
    }

    return fullObject;
};

console.log(filterObject(fullObject));