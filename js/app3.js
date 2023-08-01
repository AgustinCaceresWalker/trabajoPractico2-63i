/* 
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let arregloSumas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for(let i=0; i < 50; i++){
let num1 = Math.floor(Math.random()* 6) + 1;
let num2 = Math.floor(Math.random()*6) + 1;

const suma = num1 + num2;

arregloSumas[suma - 2] ++;
}

document.write("Resultado de las apariciones de cada suma:");
document.write("<ul>")
for (var j = 2; j <= 12; j++) {
  document.write("<li>" + j + ": " + arregloSumas[j - 2] + " veces" + "</li>");
}
document.write("</ul>")