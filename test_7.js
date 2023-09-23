// --------------------------------------- Regular Expressions -----------------------------------------------------

/*
  Descriptions and Key Points: ------->

  ✔  A regular expression is a sequence of characters that forms a search pattern.
  ✔  The search pattern can be used for text search and text replace operations.
  ✔  When you search for data in a text, you can use this search pattern to describe what you are searching for.
  ✔  A regular expression can be a single character, or a more complicated pattern.
  ✔  Regular expressions can be used to perform all types of text search and text replace operations.



  Regular Expression contains four function --> match(), search(), replace(), test()

  ✔  match(): Matches string against regular expression and returns array with the matches. Returns null if no match is found.
  ✔  search(): Matches string against regular expression and returns index (position) of the first match. Returns -1 if no match is found.
  ✔  replace(): Matches string against regular expression, replace the value and returns the new value. Doesn't change the original string.
  ✔  test(): The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
*/



// Using String search():
// The search() method searches a string for a specified value and returns the position/index of the match

let textFirst = `Learn javaScript`;
let resFirst_s = textFirst.search(`javaScript`);
console.log(resFirst_s);

// Using String search() with Regular Expression:
// Use regular expression modifiers to do a case-insensitive search in a string

let resFirst_r = textFirst.search(/javascript/i);
console.log(resFirst_r);




// Using String replace():
// The replace() method replaces a specified value with another value in a string & returns the string

let textSecond = `Learn Python`;
let resSecond_s = textSecond.replace(`Python`, `Javascript`);
console.log(resSecond_s);

// Using String replace() with Regular Expression:
// Use regular expression modifiers to do a case-insensitive search in a string:

let resSecond_r = textSecond.replace(/python/i, `JavaScript`);
console.log(resSecond_r);




// Regular Expression Modifiers:
// Modifiers can be used to perform case-insensitive more global searches

/*
  - - - - - - -           - - - - - - - -
    Modifier                Description
  - - - - - - -           - - - - - - - -
      i                    Perform case-insensitive match
      g                    Perform global match (Find the all matches that are available)
      m                    Perform multiline match
*/

let textThird = `Home Sweet Home`;

let resThird = textThird.replace(/home/i, `I like`);
console.log(resThird);

let resThird_S = textThird.replace(/home/ig, `Air`);
console.log(resThird_S);

let textFourth = `Is this \nis yours?`;
let resFourth = textFourth.match(/^is/m);
console.log(resFourth);



// Can also use multiple pattern/expression inside Regular Expression using brackets
let textFifth = `My favorite color is gray. HEX colorrrrr code is #808080. I believe you are not "Color blind"! If you are not colour blind then tell me what is your favourite colourr? Or you like multiple colors? Can we make the 'r' silent? Like colo! REGULAR EXPRESSION makes me forget all spellings he he!`;

let resFifth_1 = textFifth.match(/color|colour/ig);
console.log(resFifth_1);

// grouping with ()
let resFifth_2 = textFifth.match(/(color|colour) blind/ig);
console.log(resFifth_2);

let resFifth_3 = textFifth.match(/[abcd]/ig);
console.log(resFifth_3);

let resFifth_4 = textFifth.match(/[a-g]/g);
console.log(resFifth_4);

// also can use and method
let resFifth_5 = textFifth.match(/[a-fA-Fw-zW-Z]/g);
console.log(resFifth_5);

// /[^<words>]/ -> NOT
let resFifth_6 = textFifth.match(/[^abc]/ig);
console.log(resFifth_6);

let resFifth_7 = textFifth.match(/[^e-z]/ig);
console.log(resFifth_7);

// Regular Expression Quantification
// /[<word>?]/ -> that word can be available zero or one time
let resFifth_8 = textFifth.match(/colou?r/ig);
console.log(resFifth_8);

// /[<word>*]/ -> that word can be available zero or multiple time
let resFifth_9 = textFifth.match(/colou?r*/ig);
console.log(resFifth_9);

// /[<word>+]/ -> that word can be available one or multiple time
let resFifth_10 = textFifth.match(/colou?r+/ig);
console.log(resFifth_10);

// /[<word>{n}]/ -> that word can be available exactly matched n times
let resFifth_11 = textFifth.match(/colou?r{2}/ig);
console.log(resFifth_11);

// /[<word>{n,m}]/ -> that word can be available n(min) to m(max) times
let resFifth_12 = textFifth.match(/colou?r{1,3}/ig);
console.log(resFifth_12);

// /^<word>/ -> matches the starting position
let resFifth_13 = textFifth.match(/^my/ig);
console.log(resFifth_13);

// /<word>$/ -> matches the ending position
let resFifth_14 = textFifth.match(/he!$/ig);
console.log(resFifth_14);

let resFifth_15 = textFifth.match(/^[0-9]/ig);
console.log(resFifth_15);   // return null because nothing starts with number



// Metacharacters: ----------->
// The (.) metacharacter is matches any character, except newline or other line terminators.
let resFifth_16 = textFifth.match(/./g);
console.log(resFifth_16);

// Metacharacter /<word>.<word>/ in JavaScript is used to search single characters, except line terminator or newline.
let resFifth_17 = textFifth.match(/h.x/ig);    // single character inside
console.log(resFifth_17);

// \w metacharacter: Word character i.e. a to z, A to Z, 0 to 9, _(underscore). It is the same as [a-zA-Z_0-9].
let textFifth_18 = `javaScript@_123_$!%. \nNewline  `;
let resFifth_18 = textFifth_18.match(/\w/g);
console.log(resFifth_18);

// \W metacharacter: Non-Word character which are not from a to z, A to Z, 0 to 9, _(underscore). It is the same as [^a-zA-Z0-9].
let resFifth_19 = textFifth_18.match(/\W/g);
console.log(resFifth_19);

// \d metacharacter: Digit character i.e. 0 to 9. It is the same as [0-9].
let resFifth_20 = textFifth_18.match(/\d/g);
console.log(resFifth_20);

// \D metacharacter: Non-Digit character which are not from 0 to 9. It is the same as [^0-9].
let resFifth_21 = textFifth_18.match(/\D/g);
console.log(resFifth_21);

// \s metacharacter: Whitespace characters such as space/tab/newline/vertical tab/form feed/carraige return. It is the same as [ \t\n\r].
let resFifth_22 = textFifth_18.match(/\s/g);
console.log(resFifth_22);

// \S metacharacter: Non-Whitespace characters such as space/tab/newline/vertical tab/form feed/carraige return. It is the same as [ \t\n\r].
let resFifth_23 = textFifth_18.match(/\S/g);
console.log(resFifth_23);

// \b metacharacter: The \b metacharacter matches at the beginning or end of a word.
// Search for the pattern 'ja' at the beginning of a word like this: \bja. Search for the pattern 'pt' at the end of a word like this: pt\b
let resFifth_24 = textFifth_18.match(/\bja/g);
console.log(resFifth_24);

let resFifth_25 = textFifth_18.match(/pt\b/g);
console.log(resFifth_25);

// \B metacharacter: The \B metacharacter matches NOT at the beginning or end of a word.
// Search for the pattern 'va', not at the beginning of a word like this: \Bva. Search for the pattern 'cr', not at the end of a word like this: cr\B
let resFifth_26 = textFifth_18.match(/\Bva/g);
console.log(resFifth_26);

let resFifth_27 = textFifth_18.match(/cr\B/g);
console.log(resFifth_27);

// \0 metacharacter: Matches NULL characters.
let resFifth_28 = textFifth_18.match(/\0/g);
console.log(resFifth_28);     // no null characters available. So it returns NULL

// \n metacharacter: Matches newline characters.
let resFifth_29 = textFifth_18.match(/\n/g);
console.log(resFifth_29);

// \f metacharacter: Find the form feed character (form feed is a page-breaking ASCII control character). If it is found it returns the position else it returns -1.
let resFifth_30 = textFifth_18.match(/\f/g);
console.log(resFifth_30);

// \r metacharacter: Find the carraige return character (Carriage return means to return to the beginning of the current line without advancing downward). If it is found it returns the position else it returns -1.
let resFifth_31 = textFifth_18.match(/\r/g);
console.log(resFifth_31);

// \t metacharacter: Find the tab character.
let resFifth_32 = textFifth_18.match(/\t/g);
console.log(resFifth_32);

// \v metacharacter: Matches vertical tab characters (tabulators).
let resFifth_33 = textFifth_18.match(/\v/g);
console.log(resFifth_33);

// \xxx metacharacter: Matches the Latin character specified by an octal number (xxx).
let resFifth_34 = textFifth_18.match(/\123/g);
console.log(resFifth_34);

// \xdd metacharacter: Matches the Latin character specified by an hexadecimal number (dd).
let resFifth_35 = textFifth_18.match(/\x61/g);
console.log(resFifth_35);

// \uxxxx metacharacter: Matches Unicode characters specified by a hexadecimal number (dddd).
let resFifth_36 = textFifth_18.match(/\u0061/g);
console.log(resFifth_36);



// exec(): ----->
// exec() Method in JavaScript is used to test for the match in a string. If there is a match this method returns the first match else it returns NULL.
let textSixth = `My favorite color is gray. I believe you are not "Color blind"! If you are not colour blind then tell me what is your favourite colourr?`;
let pattern = /color/gi;
let resSixth = pattern.exec(textSixth);
console.log(resSixth);
resSixth = pattern.exec(textSixth);
console.log(resSixth);




// Example-1: Matching hex color code
const text_1 = `#2A2A2A`;   // HTML hex code act as a pair like 2A 2A 2A 2A. First one any digit and second one a-f or A-F
const regex_1 = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

const matches_1 = text_1.match(regex_1);
const index_1 = text_1.search(regex_1);
const replaced_1 = text_1.replace(regex_1, `#000000`);
const testing_1 = regex_1.test(text_1);

console.log(matches_1, "|", index_1, "|", replaced_1, "|", testing_1);


// Example-2: Bangladeshi mobile number validation
const text_2 = `+8801777666555`;
const regex_2 = /(\+88)?01[1-9]\d{8}/g;

const matches_2 = text_2.match(regex_2);
const index_2 = text_2.search(regex_2);
const replaced_2 = text_2.replace(regex_2, `012223334455`);
const testing_2 = regex_2.test(text_2);

console.log(matches_2, "|", index_2, "|", replaced_2, "|", testing_2);


// Example-3: Match email address
const text_3 = `abc123@gmail.com`;
const regex_3 = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/ig;

const matches_3 = text_3.match(regex_3);
const index_3 = text_3.search(regex_3);
const replaced_3 = text_3.replace(regex_3, `012223334455`);
const testing_3 = regex_3.test(text_3);

console.log(matches_3, "|", index_3, "|", replaced_3, "|", testing_3);


// Example-4: Match a URL with format http://example.com or https://www.example.com
const regex_4 = /^[https?]+:\/\/((w{3}\.)?[\w+]+)\.[\w+]+$/i;

console.log(regex_4.test('https://www.example.com'));
// Output: true

console.log(regex_4.test('http://example.com'));
// Output: true

console.log(regex_4.test('https://example'));
// Output: false. Missing -> .com