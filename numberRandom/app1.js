const boton1 = document.getElementById("empezar--boton");
const numero = document.getElementById("numero");
const inputEntrada = document.getElementById("inputEntrada");
const random = document.getElementById("solution--boton");

let randomNum;

boton1.addEventListener("click", function() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  boton1.classList.add("d-none");
  numero.classList.remove("d-none");
});

random.addEventListener("click", function() {
  const numUsuario = parseInt(inputEntrada.value);

  if (numUsuario < 1 || numUsuario > 100) {
    alert("NO ESTÁ EN EL RANGO DE 1 - 100 BOLUDO")
    return;
  }
  if(isNaN(numUsuario) || null){
alert("Pero poné un numero cheee")
return;
  }

  if (numUsuario === randomNum) {
    alert("¡ERA HORAAA ya me dormia che. Gracias por jugar!");
    restart();
  } else if (numUsuario < randomNum) {
    alert("¡Que ponia! es un numero Mayor");
  } else {
    alert("Te doy una pista mas, es menor. Ya no jodas Gaby");
  } 

  inputEntrada.value = "";
});

function restart() {
  randomNum = null;
  boton1.classList.remove("d-none");
  numero.classList.add("d-none");
}