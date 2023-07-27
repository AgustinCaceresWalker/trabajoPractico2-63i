const texto = prompt("Ingresa una cadena de texto:");
let reversa = "";

for (let i = texto.length - 1; i >= 0; i--) {
  reversa += texto[i];
}

alert(reversa);
