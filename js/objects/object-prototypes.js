// Prototypes are the mechanism by which JavaScript objects inherit
// features frome one another.

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();
// Every object in JS has a built-in property, which is called prototype.
// The prototype is itself an object, so the prototype will have its own prototype
// making what's called a prototype chain
// The chain ends when we reach a prototype that has null for its own prototype.

// The property of an object that points to its prototype is not called prototype.
// Its name is not standard, but in practice all browsers use __proto__
// The standard way to access an object's prototype is the Object.getPrototypeOf()
//

// When you try to access a property of an object:
// 1. if the property cant be found in the object itself, the prototype is searched
// for the property.
// 2. If the property still cant be found, then the prototype's prototype is searched
// and so on until either the property is found or the end of the chain is reached, in which case
// undefined is returned
//
    //
// So when we call myObject.toString():
// the browser looks for toString in myObject
// cant find it there, so looks in the prototype object of myObject for toString()
// finds it there, and calls it
//
//
// Whats the prototype for myObject? To find out we can use Object.getPrototypeOf()
console.log(Object.getPrototypeOf(myObject));
