// Variables
let destino = "";
let precio = 0;
let opcion = 0;

// Opciones disponibles
function mostrarOpciones() {
  console.log("Bienvenido a Turisviajes.");
  console.log("Por favor, elija un destino:");
  console.log("1. Bariloche (20000 pesos)");
  console.log("2. Mendoza (15000 pesos)");
  console.log("3. Salta (10000 pesos)");
  console.log("4. Iguazú (25000 pesos)");
}

// Destino elegido
function preguntarDestino() {
  do {
    opcion = parseInt(
      prompt("Por favor, ingrese el número del destino elegido:")
    );
    if (opcion === 1) {
      destino = "Bariloche";
      precio = 20000;
      console.log("Ha elegido viajar a " + destino + ".");
    } else if (opcion === 2) {
      destino = "Mendoza";
      precio = 15000;
      console.log("Ha elegido viajar a " + destino + ".");
    } else if (opcion === 3) {
      destino = "Salta";
      precio = 10000;
      console.log("Ha elegido viajar a " + destino + ".");
    } else if (opcion === 4) {
      destino = "Iguazú";
      precio = 25000;
      console.log("Ha elegido viajar a " + destino + ".");
    } else {
      console.log("Opción inválida. Por favor, elija un número entre 1 y 4.");
    }
  } while (opcion < 1 || opcion > 4);
}

// Cantidad de pasajeros
function preguntarPasajeros() {
  let pasajeros = 0;
  do {
    pasajeros = parseInt(
      prompt("Por favor, ingrese la cantidad de pasajeros:")
    );
    if (pasajeros <= 0) {
      console.log("Opción inválida. Por favor, ingrese un número mayor a 0.");
    }
  } while (pasajeros <= 0);
  console.log("Usted viajará con " + pasajeros + " pasajeros.");
  precio *= pasajeros;
}

mostrarOpciones();
preguntarDestino();
preguntarPasajeros();

// precio final usuario
console.log(
  "El precio final de su viaje a " + destino + " es de " + precio + " pesos."
);
