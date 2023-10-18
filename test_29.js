// -------------------------------------- JavaScript Iterators -----------------------------------------------------

// Array iterator: for...of
const arr = [1, 2, 3, 4, 5];

console.dir(arr);
// Inside the prototype or __proto__ can found Symbol.iterator function property. If Symbol.iterator available that can be iterate. By default every time javaScript call the Symbol.iterator

for(let i of arr){
    console.log(i);
}

// String iterator: for...of
// String also can be iterate
let str = `check`;

for(let i of str){
    console.log(i);
}


// How iterator works
let Arr = [10, 20, 30, 40, 50];

// when looping(for...of) through array/string it automically calls Symbol.iterator(). And then call next() method
let iterator = Arr[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
/*
    returns: {done: false, Value: "<values>"}
    It continues untill done: true, value: undefined
*/


// Iterator Protocol:
/*
    1. Must be an object
    2. Must have Symbol.iterator method prototype
    3. Inside the Symbol.iterator method prototype must have next() method
    4. After calling next() method it returns {done: false, Value: "<values>"}
    It continues untill done: true, value: undefined
*/


// Create custom iterator:
// Here we change a String's global behaviour
// NOTE: This is strictly prohibited

// change the Symbol.iterator function
String.prototype[Symbol.iterator] = function() {
    let count = this.length;
    // must return an object according to iterator rule
    return {
        // must impliment next() method
        next() {
            if(count > 0) {
                count--;
                return {
                    done: false,
                    value: `Prohibited`
                }
            }
            return {
                done: true,
                value: undefined
            }
        }
    }
}

console.log([...`Check`]);


// Example: Create an iterator which will generate 4 consecutive numbers:
function generateNumbers(start, end, step) {
    let current = start;
    // must return an object according to iterator rule
    return {
        [Symbol.iterator]: function() {
            // have to retun an object
            return {
        // must impliment next() method
                next() {
                    let result;
                    if(current <= end) {
                        result = {
                            done: false,
                            value: current
                        }
                        current += step;
                        return result;
                    }
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

console.log([...generateNumbers(1, 50, 4)]);


const person =  {
    name: `some`,
    age: 20
}

/*
for(i of person) {
    console.log(p);
}

# returns -> person is not iterable. person object don't have Symbol.iterator.
same as number is not also iterable.
*/