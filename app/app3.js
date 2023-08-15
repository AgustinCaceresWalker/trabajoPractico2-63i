/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

*/

class Objetos{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    datosPantalla(){
        console.log(`Codigo: ${this.codigo} Nombre: ${this.nombre} Precio: ${this.precio}`)
    }
}

const marioBros = new Objetos(152530,"Mario Juguete", 2500)
const rollingCap = new Objetos(02052023,"Gorra Rolinga (creo)", 3700)
const noteBook = new Objetos(696969,"Notebook Gaby 25v", 15000)

const arreglo = [marioBros, rollingCap, noteBook]

arreglo.forEach(function(objeto){
objeto.datosPantalla();
})