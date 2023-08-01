function calculadoraDePerimetros(a, b) {
    let perimetro = 2 * (a + b);
    return perimetro;
  }
  

  let  num1= parseFloat(prompt("Ingrese valor del LADO A:"));
  let num2= parseFloat(prompt("Ingrese valor del LADO B:"));
  

  let resultado = calculadoraDePerimetros(num1, num2);
  

  document.write("El perímetro del rectángulo es: " + resultado);
  