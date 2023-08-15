/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulos {
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho
    }

 modAlto(num1){
this.alto = num1
 }   

modAncho(num2){
    this.ancho = num2;
}

mostrar(){
console.log(`Alto => ${this.alto } Ancho => ${this.ancho}`)
}

perimetroCalc(){
    console.log("El perimetro de su rectangulo es: "+ 2 *(this.alto + this.ancho) )
}

areaCalc(){
    console.log("Adivina... adivinador... el area de tu rectangulo es: " + this.alto * this.ancho)
}
}

const ezeRectangulo = new Rectangulos(69,120)

/* 
¡diviertete creando! te amo, con cariño Agus
*/