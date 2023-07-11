//Declaración de variables
const precioHora = 400;
let mensaje =
  "Bienvenido.\n \nIngrese '1' para consultar tu deuda. \nIngrese '2'para realizar su pago.  \nIngrese '3' para salir.";

//Arrow Function para crear valores aleatorios para el pago del servicio
const valorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//Se pide al usuario ingresar el dato
let vehiculo = prompt("Ingresa el tipo de vehículo:");
let vehiculoLowerCase = vehiculo.toLowerCase();

//Se define el objeto vacío donde se guardarán los datos
const cliente = {};

//Ciclo 'for' para generar un ID aleatorio
for (let numero = 1; numero <= 1; numero++) {
  let numeroAsignado = Math.floor(Math.random() * 40) + 1;
  alert(
    "Tu ID asignado es: #" +
      numeroAsignado +
      "\n \nPresione 'Aceptar' para continuar"
  );
  cliente.identificador = numeroAsignado;
}
cliente.vehiculo = vehiculoLowerCase;
cliente.fechaIngreso = new Date();

//Se muestra a través de consola los datos que ahora tiene el objeto
console.log(cliente);

//Se muestra el mensaje guardado para comenzar con la otra parte del programa
let inicio = prompt(mensaje);

//Variables de scope global para generar el resultado
let hora = valorAleatorio(1, 6);
let minutos = valorAleatorio(1, 60);
let precio = (minutos / 60) * precioHora + hora * precioHora;
let precioTotal = precio.toFixed(2);

//Comienzo del bucle 'while'
while (inicio !== "3") {
  if (inicio === "1") {
    alert("Tu deuda total es: " + precioTotal + "$");
    //Se inicializa un arreglo vacío donde luego se guardarán algunos datos
    const arregloDatos = [];

    const fecha = new Date();
    const cantidadPagada = precioTotal;
    const identificador = cliente.identificador;
    const tipoVehiculo = cliente.vehiculo;
    arregloDatos.push(fecha, cantidadPagada, identificador, tipoVehiculo);

    //Se muestra a través de consola los datos que ahora tiene el arreglo
    console.log(arregloDatos);

    //Se hace uso del metodo 'includes' para saber si existe el elemento dentro del arreglo
    let encontrarElemento = arregloDatos.includes("moto");
    console.log(encontrarElemento);

    //Condicional relacionado con el resultado del metodo anterior
    if (encontrarElemento) {
      console.log("¡Recuerda usar casco siempre!");
    } else {
      console.log("¡Vuelva pronto!");
    }
  } else if (inicio === "2") {
    alert(
      "Se ha pagado correctamente el monto de: " +
        precioTotal +
        "$" +
        "\n\n¡Gracias por preferirnos, vuelva pronto!"
    );
  } else {
    alert("Por favor ingrese una opción válida.");
  }

  inicio = prompt(mensaje);
}
alert("Hasta luego.");
