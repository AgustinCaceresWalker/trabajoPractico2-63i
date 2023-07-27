const texto = prompt("Ingresa una cadena de texto:");
const vocales = ['a', 'e', 'i', 'o', 'u'];

let vocal = -1;

for (let i = 0; i < texto.length; i++) {
  const letras = texto[i].toLowerCase();
  if (vocales.includes(letras)) {
    vocal = i;
    break;
  }
}

if (vocal !== -1) {
  console.log("La vocal "+ texto[vocal] + " está en la posición" + vocal);
} else {
  console.log("No se encontraron vocales en el texto.");
}
