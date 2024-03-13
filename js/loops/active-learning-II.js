const people = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];

// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';

// My solution
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
let peopleCopy = people.slice();

for(const person of people){
    if(person === "Phil" || person === "Lola"){
        let refusedPeopleIndex = peopleCopy.indexOf(person); 
        let deletedPeople = peopleCopy.splice(refusedPeopleIndex, 1);
        refused.textContent += ` ${deletedPeople},`;
    }
}

for(const peopleC of peopleCopy){
    admitted.textContent += `${peopleC}, `;
}

// Theirs
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
