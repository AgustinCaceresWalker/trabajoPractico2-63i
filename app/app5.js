/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro{
    constructor(isbn,titulo,autor,numPag){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
    }

    mostrarLibro(){
        console.log(`Libro: ${this.titulo} ISBN: ${this.isbn} AUTOR: ${this.autor} NUMERO DE PAGINAS: ${this.numPag}`)
    }

}

const nuevoLibro1 = new Libro(12391923200, "La desventura de Agustin Caceres", "Ezequiel Amin", 18)
const nuevoLibro2 = new Libro(120000232234,"Eze bros The Movie", "Agustín Caceres", 10023)

nuevoLibro1.mostrarLibro();
nuevoLibro2.mostrarLibro();

if(nuevoLibro1.numPag > nuevoLibro2.numPag){
    console.log(`El libro que mas pagina es: ${nuevoLibro1.titulo}`)
} else {
    console.log(`El libro con mas paginas es: ${nuevoLibro2.titulo}`)
}