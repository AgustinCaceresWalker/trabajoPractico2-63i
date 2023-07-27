// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let cadena = 0;
let numeros;

while (true) {
    numeros = prompt("¡Ingrese numeros! para concluir toque CANCELAR")
    if(numeros === null){
        alert("La suma total de numeros es: " + cadena)
        break;
    } else {
        const parseNum = parseFloat(numeros)
        if(isNaN(parseNum)){
            alert("el valor no es un numero valido bobis. volvé a intentar")
        } else{
            cadena += parseNum;
        }
    }
}