// Launch countdown

for(let i = 10; i >= 0; i--){
    if(i === 10){
        const para = document.createElement('p');
        para.textContent = "Countdown 10";
        output.appendChild(para);
    }else if(i === 0){
        const para = document.createElement('p');
        para.textContent = "Blast off!";
        output.appendChild(para);
        break;
    }
    const para = document.createElement('p');
    para.textContent = i;
    output.appendChild(para);
}

// Solución de ellos: // crean solo un para, agregan contenido y lo agregan
// al div con el appendChild.
// El bloque if no se detiene cuando asigna contenido.
// Tenga más en cuenta también lo que queda por fuera del bloque if.
const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
