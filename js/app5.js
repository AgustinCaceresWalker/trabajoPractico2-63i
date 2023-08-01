function prueba(palabras) {
    let onlyMayus = false;
    let onlyMinus = false;
  
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] >= 'A' && palabras[i] <= 'Z') {
        onlyMayus = true;
      } else if (palabras[i] >= 'a' && palabras[i] <= 'z') {
        onlyMinus = true;
      }
  
      if (onlyMayus && onlyMinus) {
        break;
      }
    }
  
    if (onlyMayus && onlyMinus) {
      document.write("Y esto? es una mezcla de letras");
    } else if (onlyMayus) {
      document.write("Esta cadena es de PURAS MAYUSCULAS");
    } else {
      document.write("y ahora son todas chiquitas");
    }
  }
  
  let test = prompt("A ver, ingresá una palabra porfavor. GRACIAS")
  document.write(prueba(test))
  