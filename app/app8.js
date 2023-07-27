const numero = prompt("Ingresa un número para generar la pirámide:");

if (!isNaN(numero) && numero >= 1 && numero <= 50) {
    for (let i = 1; i <= numero; i++) {
      let fila = '';
      for (let j = 1; j <= i; j++) {
        fila += j;
      }
      console.log(fila);
    }
  } else {
    console.log("El número no es válido. Debe ser un valor entre 1 y 50.");
  }