console.log("Bienvenido/a a TuriViajes");

const destinos = [
  { nombre: "Bariloche", precio: 30000 },
  { nombre: "Cordoba", precio: 25000 },
  { nombre: "Mendoza", precio: 28000 },
  { nombre: "Mar del Plata", precio: 12000 },
  { nombre: "Salta", precio: 32000 },
  { nombre: "Ushuaia", precio: 40000 },
  { nombre: "Rosario", precio: 22000 },
  { nombre: "Iguazu", precio: 35000 },
];

function mostrarDestinos() {
  destinos.forEach(function (destino) {
    console.log(destino.nombre + " (" + destino.precio + " pesos)");
  });
}

function buscarDestino(nombre) {
  return destinos.find(function (destino) {
    return destino.nombre.toLowerCase() === nombre.toLowerCase();
  });
}

function calcularTotal(destino, pasajeros) {
  let total = destino.precio * pasajeros;
  console.log(
    "El precio total del viaje a " +
      destino.nombre +
      " para " +
      pasajeros +
      " pasajeros es de " +
      total +
      " pesos."
  );
}

function realizarReserva() {
  // Mostrar destinos disponibles
  console.log("Destinos disponibles:");
  mostrarDestinos();

  // Preguntar al usuario por el destino elegido
  let nombreDestino = prompt(
    "Ingrese el nombre del destino elegido:"
  ).toLowerCase();

  // Buscar el objeto correspondiente al destino elegido
  let destinoElegido = buscarDestino(nombreDestino);

  if (destinoElegido) {
    // Si se encontró el destino elegido, preguntar por la cantidad de pasajeros
    let cantidadPasajeros = parseInt(
      prompt("Ingrese la cantidad de pasajeros:")
    );

    // Calcular y mostrar el precio total del viaje
    calcularTotal(destinoElegido, cantidadPasajeros);
  } else {
    // Si no se encontró el destino elegido, mostrar un mensaje de error
    console.log("El destino ingresado no está disponible.");
  }
}

// Llamar a la función
realizarReserva();
