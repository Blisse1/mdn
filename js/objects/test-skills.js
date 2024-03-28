// Objects I
// const cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log('Meow!');
//   }
// }

// Put your code here
// let catName = cat["name"];
// cat.color = "black";
// cat.greeting();

// Objects II
const myFavBand = {
    name: "NWJNS",
    nationality: "South Korea",
    genre: "K-POP",
    members: "5",
    formed: "2022",
    split: false,
    albums: [
        {
            name: "New Jeans",
            released: "2022",
        },
        {
            name: "Get Up",
            released: "2023",
        }
    ],
}

let bandInfo = `The name of the girl-band is ${myFavBand.name}, they're from ${myFavBand.nationality}
they've been active for ${2024 - myFavBand.formed} years. They do ${myFavBand.genre} and the title of 
their first album was ${myFavBand.albums[0].name} released on ${myFavBand.albums[0].released}`;

console.log(bandInfo);

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     }
// }

// const cat2 = {
//     name : 'Zeus',
//     breed : 'Persian',
//     color : 'black',
//     greeting: function() {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     }
// }

// cat.greeting();
// cat2.greeting();

// test IV

function Cat(name, breed, color){
   this.name = name; 
   this.breed = breed; 
   this.color = color; 
   this.greeting = function() {
       console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
   }
}

const cat = new Cat("Bertie", "Cymric", "white");
cat.greeting();
console.log(cat.breed);

const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");
cat2.greeting();
