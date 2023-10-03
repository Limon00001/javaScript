// --------------------------------------- JavaScript Modules -----------------------------------------------------

// combine import:
import * as result from './test_16_combine.js';

console.log(result.itemAll.playerName);
console.log(result.itemAll.message());
console.log(`${result.playerInfo.fname} ${result.playerInfo.lname}`);



// Dynamic Import:
const {player, myF} = await import("./test_16_a.external.js");

console.log(myF());


// Or can use javaScript promises method. It returns array format.
const promises = Promise.all(
    [
        await import("./test_16_a.external.js"),
        await import("./test_16.js")
    ]
);

console.log(promises);