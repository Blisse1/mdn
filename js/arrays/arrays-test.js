// // Arrays I
// let myArray = ["Bliss", "Matt", "Nat"];
// myArray[0] = "Fundacion";
// myArray[1] = "Republica";
// myArray.unshift("Sync")

// Arrays II
// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split("+"); // para separar por simbolo y quitarlo
// let arrayLength = myArray.length;
// let lastItem = myArray[arrayLength - 1];

// Arrays III
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();
myArray.push("Bliss","Benito");

for(array in myArray){
    console.log(`${myArray[array]} (${array})`);
}

// Arrays IV

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
const eaglesIndex = birds.indexOf("Eagles");

const birdsModified = birds.slice(); // Mejor trabajar sobre una copia de la original
birdsModified.splice(eaglesIndex, 1);

birds.splice(eaglesIndex, 1);

console.log(birdsModified);

let eBirds = [];

for(const bird of birds){
    bird.startsWith("E") ? eBirds.push(bird) : false;
}

console.log(eBirds);


