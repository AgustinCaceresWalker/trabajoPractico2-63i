const texto = prompt("Ingresa una cadena de texto:");
let vocales = 0;

for (let i = 0; i < texto.length; i++) {
  const vocal = texto[i].toLowerCase();
  if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
    vocales++;
  }
}

alert("El número de vocales en el texto es:" + vocales);
