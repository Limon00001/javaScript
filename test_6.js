// --------------------------------------- Bitwise Operations -----------------------------------------------------


/**
    JavaScript Uses 32 bits Bitwise Operands:

    ✔ JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
    ✔ Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
    ✔ After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
 */




/*  - - - - - -             - - - - - -                     - - - - - - - - - -
      Operator                  Name                            Description
    - - - - - -             - - - - - -                     - - - - - - - - - - 

        &                       AND                         Sets each bit to 1 if both bits are 1
        |                       OR                          Sets each bit to 1 if one of two bits is 1
        ^                       XOR                         Sets each bit to 1 if only one of two bits is 1
        ~                       NOT                         Inverts all the bits
        <<                      Zero fill left shift        Shifts left by pushing zeros in from the right and leftmost bits fall off
        >>>                     Zero fill right shift       Shifts right by pushing zeros in from the left and rightmost bits fall off
        >>                      Signed right shift          Shifts right copies from the leftmost bits and rightmost bits fall off
 */




// Bitwise AND (&): ---->

const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// Expected output: 1

let c = 5n;
c &= 2n; 
console.log(c); // Output: 0n



// Bitwise NOT (~): ---->

const d = 5; // 00000000000000000000000000000101
console.log(~d); // 11111111111111111111111111111010
// Expected output: -6

const e = -3; // 11111111111111111111111111111101
console.log(~e); // 00000000000000000000000000000010
// Expected output: 2



// Bitwise OR (|): ---->

const f = 5; // 00000000000000000000000000000101
const g = 3; // 00000000000000000000000000000011

console.log(f | g); // 00000000000000000000000000000111
// Expected output: 7

let h = 5; // 00000000000000000000000000000101
h |= 3; // 00000000000000000000000000000011

console.log(h); // 00000000000000000000000000000111
// Expected output: 7

let i = 5n;
i |= 2n; // Output: 7n



// Bitwise XOR (^): ---->

const j = 5; // 00000000000000000000000000000101
const k = 3; // 00000000000000000000000000000011

console.log(j ^ k); // 00000000000000000000000000000110
// Expected output: 6

let l = 5n;
l ^= 3n;
console.log(l); // Output: 6n



// Bitwise Zero Fill Left Shift (<<): ----->

let m = 5 << 1;
console.log(m); // Output: 10

let n = 9 << 3;
console.log(n); // Output: 72



// Bitwise Sign Preserving Right Shift (>>): ----->

let o = 5 >> 1;
console.log(o); // Output: 2

let p = -9 >> 3;
console.log(p); // Output: -2



// Bitwise Zero fill Right Shift (>>>): ----->

let q = 9 >>> 1;
console.log(q); // Output: 4

let r = -7 >>> 2;
console.log(r); // Output: 1073741822




// Decimal to Binary, Octal, Hexadecimal: ---------->

// Syntax: number.toString(base);
let s = 126;
console.log(s.toString(2));   // Binary Output: 1111110
console.log(s.toString(8));   // Octal Output: 176
console.log(s.toString(16));  // Hex Output: 7e



// Binary to Decimal, Octal, Hexadecimal: ---------->

// Syntax: parseInt(number, number_base).toString(converting_number_base);
let t = 111101;
console.log(parseInt(t, 2).toString(10));       // Decimal Output: 61
console.log(parseInt(t, 2).toString(8));        // Octal Output: 75
console.log(parseInt(t, 2).toString(16));       // Hex Output: 3d



// Hexadecimal to Decimal, Binary, Octal : ---------->

// Syntax: parseInt(number, number_base).toString(converting_number_base);

let u = "7c";     // Hexadecimal must be in ` ` or ' ' or " "

console.log(parseInt(u, 16).toString(10));       // Decimal Output: 124
console.log(parseInt(u, 16).toString(2));        // Binary Output: 1111100
console.log(parseInt(u, 16).toString(8));        // Octal Output: 174



// Octal to Decimal, Binary, Hexadecimal : ---------->

// Syntax: parseInt(number, number_base).toString(converting_number_base);

let v = 14;     // Hexadecimal must be in ` ` or ' ' or " "

console.log(parseInt(v, 8).toString(10));        // Decimal Output: 12
console.log(parseInt(v, 8).toString(2));         // Binary Output: 1100
console.log(parseInt(v, 8).toString(16));        // Hex Output: c