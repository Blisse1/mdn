// Test I
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName(){
    const randomName = Math.floor(Math.random() * names.length);
    para.textContent += names[randomName]; // textContent para agregarle contenido al para.
}

chooseName();

// Test II
function drawRectangle(x, y, width, height, color){
    if(canvas.getContext){
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        canvas.setAttribute("style", `background-color: ${color}; margin-left:${x}px; margin-top: ${y}px`)
    }
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawRectangle(x, y, width, height, color);

// Test III
// Add your code here

function random(initial, final){
    return Math.floor(Math.random(initial) * final);
}

function chooseName(arr){
    const result = arr[random(0, 3)];
    return para.textContent += result;
}

chooseName(names);

// Test IV
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

const shortNames = names.filter((name) => name.length < 5);

para.textContent = shortNames;

// Ejemplo de ellos
// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
// const para = document.createElement('p');

// function isShort(name) {
//     return name.length < 5;
// }

// const shortNames = names.filter(isShort);
// para.textContent = shortNames;

