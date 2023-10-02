// --------------------------------------- JavaScript Modules -----------------------------------------------------

// Modules are imported from external files with the import statement.


// Export:
/*
    ✔ Modules with functions or variables can be stored in any external file.
    ✔ There are two types of exports: Named Exports and Default Exports.
*/


// Named Exports:
// named exports two ways. In-line individually, or all at once at the bottom.

// In-line individually:
export let name = `Andrew`;
export let age = 45;


// All at once at the bottom:
let item = `water`;
let price = 25;
export { item, price };


// Export Named function:
export const message = () => {
    const name = "Jessica";
    const age = 40;
    return `${name} is ${age} years old.`;
};



// Default Exports:
// We can only have one default export in a file.

export let playerName = `Ozil`;
// export let playerAge = 40;
let playerAge = 40;
export default playerAge;
// At first, need to declare and assign variable. Then [export default variable_name]. Can't use var, let, const after default.


// Export Default function:
    /*
    const send = () => {
        const name = "Helen";
        const age = 70;
        return `${name} is ${age} years old.`;
    };

    export default send();
    // Can't use var, let, const after default.
*/