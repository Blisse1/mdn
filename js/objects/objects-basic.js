// An object is a collection of related data and or functionality
// These usually consist of several variables and functions
// which are called properties and methods when they're inside objects
const person = {
    // name: ["Bob", "Smith"], // object property
    name: {
        first: "Bob",   
        last: "Smith",   
    },
    age: 32, // object property
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`); // object method
        // console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`); // object method
    },
    // instead of bio: function(), we can write just bio()
    introduceSelf() { // object method
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

/*
/* This is an object literal. We've literally written out the object
/* contents as we've come to create it
/* This is different compared to objects instantiated from classes
/* its very common to create an object using an object literal
/* when you want to transfer a series of structured, related data items
/* in some manner, for example sending a request to the server
/* to be put in a database.
/* Sending an object is much more efficient than sending several items
/* individually and its easier to work with than an array, when you want to
/* identify individual items by name.
*/ 

// Dot notation
person.age;
person.bio();

// Objects as objects properties
person.name.first;
person.name.last;

// Bracket notation
// Instead of using dot notation you can use square brackets:
person["age"];
person["name"]["first"];

// dot notation is generally preferred over bracket notation because it is more
// succint and easier to read. However there are some cases where you have to use
// square brackets. For example, if an object name is held in a variable, then you cant
// use dot notation to access the value, but you can access the value using bracket
// notation

// logProperty() can use person[propertyName] to retrieve the value of the property
// named in propertyName.
function logProperty(propertyName){
    console.log(person[propertyName]);
}

logProperty("name");
logProperty("age");

// Setting object members
// You can also set (update) the value of object members by declaring the member
// you want to set, like this

// dot notation
person.age = 45;
// bracket notation
person["name"]["first"] = "Bliss";

console.log(person.age);
console.log(person["name"]["first"]); 

// You can also create completely new members

person.eyes = "blue";
person.farewell = function () {
    console.log("Bye everyone!")
};

// And you can test it
console.log(person.eyes);
console.log(person.farewell());

// One useful thing of bracket notation is that it can be used to set
// not only member values dynamically, but member names too.
// Let's say we wanted users to be able to store custom value types in their
// people data, by typing the member name and value into two text inputs.
// We could get those values like this

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

const myDataName = "height";
const myDataValue = "1.75m";

// We could then add this new member name and value to the person object like this
person[myDataName] = myDataValue;
console.log(person.height);

// Testing that
// Adding a property to an object using the method above isnt possible with dot notation
// which can do only accept a literal member name, not a variable value pointing to a name

// What is "this"?
// The this keyword refers to the current object the code is being written inside.
// in this case this is equivalent to person. So why not just write person instead?
// Well when you only have to create a single object is not so useful. But if you create
// more than one, this enables you to use the same method definition for every object
// you create

let person1 = {
    name: "Bliss",
    introducesSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}
let person2 = {
    name: "Isaac",
    introducesSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

// This isnt hugely useful when you're writing out object literals by hand
// but it will be essential when we start using constructors to create more than
// one object from a single object definition
