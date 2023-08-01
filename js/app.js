const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
document.write("<h1>LISTA MESES</h1>")
document.write("<ul>")
meses.forEach((mes)=>{
    document.write("<li>"+ mes +"</li>")
})
document.write("</ul>")