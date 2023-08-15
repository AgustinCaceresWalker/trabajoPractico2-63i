/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona{
    constructor(nombre,edad,sexo,peso,altura,anio){
this.nombre = nombre;
this.edad = edad;
this.sexo = sexo;
this.peso = peso;
this.altura = altura;
this.anio = anio;
this.dni = this.randomDni()
    }
    
    randomDni(){
        const num1 = Math.floor(Math.random()*100000000);
        return num1.toString();
    }
    mostrarGeneracion(){
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

//test

const ezeGuapo = new Persona("Eze Amin Caceres", 18, "H?", 65, 175, 2004)

ezeGuapo.mostrarGeneracion();
ezeGuapo.mostrarDatos();