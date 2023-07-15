//Declaración de variables
const precioHora = 400;

//Arrow Function para crear valores aleatorios para el pago del servicio
const valorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//Función para crear un valor aleatorio
function mostrarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  //Se muestra el resultado a través del HTML
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h4>Tu número es: #" + numeroAleatorio;
  botones.style.display = "block";
  boton.style.display = "none";
}

//Se obtienen los elementos del DOM
let boton = document.getElementById("boton");
let botones = document.getElementById("botones");

boton.addEventListener("click", function (e) {
  e.preventDefault();

  //Muestra el resultado de la función
  mostrarNumeroAleatorio();
});

//Variables de scope global para generar el resultado
let hora = valorAleatorio(1, 6);
let minutos = valorAleatorio(1, 60);
let precio = (minutos / 60) * precioHora + hora * precioHora;
let precioTotal = precio.toFixed(2);

//Variables para luego usar en el objeto
const fecha = new Date();
const monto = precioTotal;
const numeroCliente = numeroAleatorio;

//Objeto
const cliente = {
  fecha,
  monto,
  numeroCliente,
};

//Se obtiene elemento del para hacer la consulta de la deuda
let consulta = document.getElementById("consultar");

//Se agrega un evento a dicho boton
consulta.addEventListener("click", function (e) {
  e.preventDefault();

  //Se muestra el valor que debe pagar el cliente
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h4>Tu deuda es: " + precioTotal + "$" + "</h4>";

  console.log(cliente);
});

//Se obtiene el elemento del DOM para realizar el pago de la deuda
let pagar = document.getElementById("pagar");

//Se agrega un evento a dicho boton
pagar.addEventListener("click", function (e) {
  e.preventDefault();

  //Se muestra el valor que debe pagar el cliente
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<h4>HOLA</h4>";
});
