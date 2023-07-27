//MATH
const obtenerNombreMayor=()=> {
    let nombre1 = prompt("¡Ingresa tu nombre!:");
    let edad1 = parseInt(prompt(`Ahora, ingresa tu edad`));
  
    let nombre2 = prompt("¡Ingresa el nombre de tu papá!");
    let edad2 = parseInt(prompt(`¡Ingresa la edad de tu papá!`));
  
    let nombre3 = prompt("¡Ingresa el nombre de tu mamá!");
    let edad3 = parseInt(prompt(`Ingresa la edad de tu mamá`));
  
    let mayorEdad = Math.max(edad1, edad2, edad3);
  
    if (mayorEdad === edad1) {
      return nombre1;
    } else if (mayorEdad === edad2) {
      return nombre2;
    } else {
      return nombre3;
    }
  }
  
  const nombreMayor = obtenerNombreMayor();
  console.log(`El nombre del mayor es: ${nombreMayor}`);