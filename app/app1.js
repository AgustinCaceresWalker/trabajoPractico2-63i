/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


*/

const platita = {
titular: "Alex Persales",
saldo:0,

ingresar: function(cantidad){
    this.saldo += cantidad;
    console.log(`Se han ingresado ${cantidad}. Saldo total: ${this.saldo}`)
},

extraer: function(cantidad){
    this.saldo -= cantidad;
    console.log(`se retiró ${cantidad}`)
},

informar: function(){
    console.log(`TITULAR: ${this.titular} SALDO: ${this.saldo}`)
}
}

