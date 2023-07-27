/*  Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/
let cadena ="";
while(true){
    let texto = prompt("ingrese un texto")
    if(texto === "" || texto === null){
        break;
    }
    cadena = cadena + "-" + texto;
}
console.log(`CADENA : ${cadena}`)