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
function linearSearch(arr, val) {

    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }

    return `Not Found!`;
}

console.log(linearSearch(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')));