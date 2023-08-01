function solucion(numero){
    if(numero % 2 === 0){
        return "Felicidades el numero es par"
    } else {
        return "Sos un bobolon, no es par"
    }
}

let pruebas = prompt("ingresa un numero pequeñuelo")

document.write(solucion(pruebas))