"use strict"
/* 
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
*/

let numero
while (true) {
    numero = Number(prompt("Escribe la nota de tu ultimo examen"))
    if (isNaN|| numero === ""){
        alert("INTRODUZCA NUMERO")
        break;
    }
    if(numero < 0 || numero > 10){
        alert("Numero erroneo. INGRESA NUMEROS ENTRE EL 0 Y EL 10")
        break;
    }
if(numero >= 0 && numero <= 2){
    alert("Lo lamento, su nota es MUY DEFICIENTE")
    break;
} else if(numero >=3 && numero <=4){
    alert("Lo siento, su nota es INSUFICIENTE")
    break;
} else if(numero >= 5 && numero <=6){
    alert("Usted es SUFICIENTE")
    break;
} else if(numero === 7){
    alert("Bien")
    break;
} else if (numero >= 8 && numero <= 9){
    alert("Usted es NOTABLE")
    break;
} else (numero === 10);{
    alert("Felicidades, obtuvo un SOBRESALIENTE")
    break;
}
}