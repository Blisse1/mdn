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

// Adding items; push()
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
// The new length of the array is returned when the method call completes
const newLength = cities.push("Bradfort", "Brighton");
console.log(newLength);

// To add an item to the start of the array; unshift()

cities.unshift("Edinburgh");
console.log(cities);

// Removing items; pop()
// To remove the last item from the array

cities.pop();
console.log(cities);

// The pop() method returns the item that was removed. You can save it in a 
// variable

let deletedItem = cities.pop();
console.log(deletedItem);
console.log(cities);

// To remove the first item of an array; shift()
cities.shift();
console.log(cities);

// If you know the index of an item, you can remove it from the array using splice()

const index = cities.indexOf("Cardiff");
if(index !== -1){
    cities.splice(index, 1);
}
console.log(cities);

// the first argument of splice() says where to start removing items
// and the second argument says how many items should be removed

// Difference between splice() and slice()
// splice() changes de original array by removing, replacing or adding values
// and returns de affected values.
// slice() returns a piece of the array but it doesnt affect the original array.

// Accesing every item of an array
// You can do this using the for...of statement
//

// Difference between for...of and for...in
// You use for...of in arrays and for...in for objects

const birds2 = ["Parrot", "Falcon", "Owl"];

for(const bird of birds2){
   console.log(bird);
}

// map()
// Sometimes you want to do the same thing for each item in an array, leaving you
// with an array containing the changed items.
// You can do this using map()

function double(number) {
    return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);

// We give a function to the map(), and map() calls the function
// once for each item in the array, passing the item. 
// It then adds the return value from each function call to a new
// array, and finally returns the new array

// filter()
// Sometimes you'll want to create a new array containing only the items
// in the original array that match some test. 
// You can do that using filter()

function isLong(city){
    return city.length > 8;
}

const cities3 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities3.filter(isLong);

// function length(city){
//     return city.length;
// }

// const lengthCities3 = longer.map(length);

console.log(longer);
// Like map(), we give a function to the filter() method, and filter()
// calls this function for every item in the array, passing in the item
// If the function returns true, then the item is added to a new array.
    // Finally returns the new array
//
/////////////////////////////////////////////////////////////////////////////

// Converting between strings and arrays: split()
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// string to array?
const cities5 = data.split(",");
console.log(cities5[cities5.length - 1]);

// array to string
const commaSeparated = cities5.join(".");
console.log(commaSeparated);

// Another way of converting an array to a string is to use the toString() method
// toString() is arguably simpler than join() as it doesnt take a parameter,
// but more limiting
// With join() you can specify different separators, whereas toString() always uses a comma
//
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
const dogNamesString = dogNames.toString();
console.log(dogNamesString);

//
