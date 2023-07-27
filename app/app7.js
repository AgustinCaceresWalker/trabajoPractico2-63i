let numero = parseInt(prompt("Ingrese un numero y descubra lo divertido ;) - No puede ser mayor de 50"));
if (!isNaN(numero)){
    if (numero > 50) {
        alert("El número no puede ser mayor que 50.");
      } else{
        for (let i = numero; i >= 1; i--) {
        let linea = '';
        for (let j = 0; j < i; j++) {
          linea += i;
        }
        console.log(linea);
      }
      }
} else{
    console.log("Debe ingresar un numero valido");
}