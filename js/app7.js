function calculadoraMultiplicadora(numero) {
    document.write("Tabla de multiplicar del número " + numero + ":");
    
    document.write("<ul>")
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
     document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
    }
    document.write("</ul>")
  }
  

  let prueba = parseInt(prompt("Ingrese un número para obtener su tabla de multiplicar:"));
  
  document.write (calculadoraMultiplicadora(prueba));
  