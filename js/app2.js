
let ciudades = []

while(true){
    let nombreCiudades = prompt("Ingresa nombre de ciudades")
    if(nombreCiudades === null){
        break;
    } 
    ciudades.push(nombreCiudades)
}
        console.log(ciudades)
    
    document.write(`El arreglo de ciudades cuenta con ${ciudades.length} ciudades`)
    document.write("<ul>")
    document.write("<li>"+ "El primer elemento es:" + ciudades[0] +"</li>")
    document.write("<li>"+ "El tercer elemento es:" + ciudades[2] +"</li>")
    document.write("<li>"+ "El ultimo elemento es:" + ciudades[ciudades.length - 1] +"</li>")
    document.write("</ul>")
    ciudades.push("Paris");
    document.write("<li>"+ "Se agregó en el ultimo lugar la ciudad:" + ciudades[ciudades.length - 1] +"</li>");
    
    ciudades.splice(1,0,"Barcelona")
    
    document.write("<h1>ARREGLO CIUDADES</h1>")
    document.write("<ul>")
    ciudades.forEach((elementos)=>{
        document.write("<li>"+"Elemento: " + elementos +"</li>")
    })
    document.write("</ul>")
