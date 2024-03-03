// Filtering greeting messages
const list = document.querySelector('.output ul');
list.innerHTML = '';
const greetings = [
    'Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon',
];

for (const greeting of greetings) {
    // Your conditional test needs to go inside the parentheses
    // in the line below, replacing what's currently there
    if (greeting.includes('Christmas')) {
        const listItem = document.createElement('li');
        listItem.textContent = greeting;
        list.appendChild(listItem);
    }
}

// Fixing capitation
const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
    // write your code just below here (my solution)

    let firstItem = city[0].toUpperCase();
    const result = firstItem + city.slice(1).toLowerCase();
    const listItem = document.createElement('li');
    listItem.textContent = result; 
    list.appendChild(listItem);
}

// const list = document.querySelector('.output ul');
// list.innerHTML = '';
// const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (const city of cities) {
//   // write your code just below here (theirs)
//   const lower = city.toLowerCase();
//   const firstLetter = lower.slice(0,1);
//   const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
//   const result = capitalized;
//   const listItem = document.createElement('li');
//   listItem.textContent = result;
//   list.appendChild(listItem);
// }

// Making new strings from old parts
const list = document.querySelector('.output ul');
list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here: my solution, theirs is the same but
    // with the difference of that they're using template strings for
    // better readability. I should take that into account instead of
    // using concatenation only

  //const result = station;
let manStract = station.slice(0,3);
let stationNameIndex = station.indexOf(";"); // 17
let stationName = station.slice(stationNameIndex + 1) // name
const result = manStract + ":" + " " + stationName;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
