// --------------------------------------- JavaScript Modules -----------------------------------------------------

// Named Imports:
import { age, name } from "./test_16.js";
console.log(name, age);

import { age as Age, name as Name } from "./test_16.js"; // it is called alias
console.log(Name, Age);

// Import all items:
import * as all from "./test_16.js";
console.log(all);
console.log(all.name);

// Import function:
import { message } from "./test_16.js";
console.log(message());



// Import Default:
import test from "./test_16.js"; // can use any keyword after import for default 
console.log(`Default value: ${test}`);


// Named & Default Import together:
// We can only have one default import in a file. Before we declare default import that's why we can't again declare it.
import { playerName } from "./test_16.js";
console.log(`Named & Default value: Player Name-> ${playerName} and Player Age-> ${test}`);

// If we didn't declare any default imports the Named & Default Import together it looks like -->
/* import test, { playerName } from "./test_16.js"; */


// Import Function:
/*
    import myFunction from "./test_16.js";
    console.log(myFunction);
*/