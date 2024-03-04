// list-like objects
// they're basically single objects that contain multiple values
// stored in a list.

// Finding the length of an array

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping.length; // 5 items

// Accessing and modifying array items
shopping[0] = "tahini";
console.log(shopping);

const random = ["tree", 795, [0, 1, 2, 3]];
console.log(random[2][0]);

// Finding the index of items in an array; indexOf()
// it returns -1 if the item is not in the array
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds[birds.indexOf("Falcon")]);
console.log(birds.indexOf("Rabbit"));

