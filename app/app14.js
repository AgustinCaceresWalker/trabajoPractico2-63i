const texto = prompt("Ingresa una cadena de texto:");
let cadenaTexto = "";

for (let i = 0; i < texto.length; i++) {
  cadenaTexto += texto[i] + "-";
}

alert(cadenaTexto);
