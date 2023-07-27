"use strict"
while (true) {
    let edad=Number(prompt("ingrese su edad"))
    if(!isNaN(edad)){
        if(edad<=17){
            alert("Lo siento eres menor para conducir")
        }
        else{
            alert("¡Felicidades tenes la edad suficiente para conducir!")
        }
        break;
    }
    else{
        alert("ERROR 321-01: Numero invalido, porfavor ingresa nuevamente")
    }
}
