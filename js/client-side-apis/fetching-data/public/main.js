const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");
verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value; 
    updateDisplay(verse);
})

function updateDisplay (verse){
    verse = verse.replace(" ", "").toLowerCase(); 
    const url = `http://localhost:3000/public/${verse}.txt`;
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.text();
        })
        .then((text) => poemDisplay.textContent = text)
        .catch((err) => poemDisplay.textContent = `Couldn't fetch verse: ${err}`)
}

