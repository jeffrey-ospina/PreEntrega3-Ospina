//Se obtienen los elementos del DOM
let boton = document.getElementById("boton");
let botones = document.getElementById("botones");

boton.addEventListener("click", function (e) {
  e.preventDefault();

  //Muestra el resultado de la función
  mostrarNumeroAleatorio();
});

//Función para crear un valor aleatorio
function mostrarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  //Se muestra el resultado a través del HTML
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h4>Tu número es: #" + numeroAleatorio;

  //Se continúa con los demás elementos de HTML
  let boton = document.getElementById("boton");
  boton.addEventListener("click", function () {
    botones.style.display = "block";
    boton.style.display = "none";
  });
}
