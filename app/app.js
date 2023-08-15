/*
 Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó


*/

const auto = {
    color:"Rojo",
    marca:"Fiat",
    modelo:"Siena",
    puertas:5,
    motor:1.4,
    
encender: function(){
    console.log("Auto encendido")
},

apagar: function(){
    console.log("El auto se apagó")
}

} 

