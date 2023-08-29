"use strict"
 //EDAD CONSTANTES
const edadValue = document.getElementById("edad")
const goodValueMinor = document.getElementById("modal-alertGoodMinor")
const goodValueMayor = document.getElementById("modal-alertGoodMayor")
const goodDeniedError = document.getElementById("modal-alertDeniedError")
const goodDeniedYear = document.getElementById("modal-alertDeniedYear")

//DNI CONSTANTES
const dniValue = document.getElementById("dni")
const errorValueDni = document.getElementById("modal-alertDenied-Dni")
const errorValueDni2 = document.getElementById("modal-alertDenied-Dni2")
const goodValueDni = document.getElementById("modal-alertGoodDNI")

//SEXO CONSTANTES
const sexValue = document.getElementById("sexo")
const onlyValue = document.getElementById("modal-alertDeniedSex")

//-------------//

//PESO CONSTANTES
const kgValue = document.getElementById("peso")
const goodValueKg = document.getElementById("modal-alertGoodWeight")
const errorValueKg = document.getElementById("modal-alertErrorWeight")

//ALTURA CONSTANTES
const sizeValue = document.getElementById("altura")
const goodValueSize = document.getElementById("modal-alertGoodSize")
const errorValueSize = document.getElementById("modal-alertErrorSize")


//AÑO CONSTANTES
const yearValue = document.getElementById("año")
const goodValueYear = document.getElementById("modal-alertGoodBirth")
const errorValueYear = document.getElementById("modal-alertErrorBirth")

//NOMBRE
const name = document.getElementById("name")
const goodValueName = document.getElementById("modal-alertGoodName")


//------------//
const btn = document.getElementById("btnShow")

class Persona {
    constructor(){
        this.nombre = nombre.value
        this.edad = edadValue.value
        this.dni = dniValue.value
        this.sexo = sexValue.value
        this.peso = kgValue.value
        this.altura = sizeValue.value
        this.añoDeNacimiento = yearValue.value
    }
    mostrarGeneracion(){

if(isNaN(edadValue.value) ){
goodDeniedError.classList.remove("d-none")
return;
}
goodDeniedError.classList.add("d-none")

        if (this.anio >= 1994){
            console.log("¡Usted pertenece a la generacion Z! Caracteristica: Irreverencia (hinchaBolas)")
        }
        else if (this.anio >= 1981 ){
console.log("¡Usted pertenece a la generación Y! Caracteristica: Frustración (dependencia emocional)")
        } else if (this.anio >=1980){
            console.log("¡Usted pertenece a la generación x! Caracteristica: Obsesión por el exito (problemas intrafamiliares)")
        } else if(this.anio >= 1949){
            console.log("¡Usted pertenece a la generación Baby Boom! Caracteristica: Ambición (manejo irracional de la ira)")
        } else {
            console.log("¡Usted pertenece a la Silent Generation! Caracteristica: Austeridad (no les gustan los juegos de disparos (creo))")
        }
    }

        esMayorDeEdad(){
            if (this.edad >= 18){
console.log("Si es Mayor de Edad")
            } else{
                console.log ("No Eze, vos no sos mayor de edad.")
            }
        }

        mostrarDatos(){
            console.log(`¡Bienvenido! ${this.nombre}, ${this.edad} ,${this.dni}, ${this.altura}cm, ${this.peso}kg, ${this.anio} `)
        }

 }

const valorCLase = new Persona();

btn.addEventListener("click",()=>{
valorCLase.mostrarGeneracion();
})