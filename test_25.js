// -------------------------------------- JavaScript Object Accessors -----------------------------------------------------

// Object Accessors (getter & setter):
// Getters and setters allow you to define Object Accessors (Computed Properties).


// JavaScript Getter ('get' Keyword)
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get fullName() {
      return this.firstName + ` ` + this.lastName;
    }
};

console.log(person.fullName);


// JavaScript Setter ('set' Keyword)
const human = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
};

human.lang = `bangla`;

console.log(human.language);



// Differences between getter and function
// function
const actor = {
    firstName: "Tom",
    lastName: "Hiddleston",
    actorName: function() {
      return this.firstName + ` ` + this.lastName;
    }
};

console.log(actor);
// accessing actor's full name
console.log(actor.actorName());


// getter
const actress = {
    firstName: "Emma",
    lastName: "Watson",
    get actressName() {
      return this.firstName + ` ` + this.lastName;
    }
};

console.log(actress);
// accessing actress's full name
console.log(actress.actressName);

// NOTE: If we see the browser's console, we'll see that actorName which is a function's method is take up a space of memory.
// And actressName which is a getter method is not take up a space of memory. When we call that it will just activate. Also it can secure better data quality.


// Object.defineProperty():
// Object.defineProperty() method used to add Getters and Setters outside the curly braces
const child = {
    firstName: `Anna`,
    lastName: `Marie`,
}

// syntax:
/*
    Object.defineProperty(object_name, `method_name`, {
        get : function() {
            return this.firstName + ` ` + this.lastName;
        }
    });
*/
Object.defineProperty(child, `fullName`, {
    get : function() {
        return this.firstName + ` ` + this.lastName;
    }
});

console.log(child.fullName);