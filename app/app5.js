while (true) {
    let inputDni=prompt("ingresa tu numero de documento (Valido entre 0 a 99999999)")

    if (inputDni === null) {
        break;
    }

    let numeroDni = parseInt(inputDni);

    if(isNaN(numeroDni) || numeroDni < 0 || numeroDni > 99999999){
        alert("Introduce un DNI valido")
    } else{
        const letrasDni ="TRWAGMYFPDXBNJZSQVHLCKE"
        let resto = numeroDni % 23;
        let letra = letrasDni.charAt(resto)
        alert("la letra del DNI " + numeroDni + " es " + letra)
    }
}