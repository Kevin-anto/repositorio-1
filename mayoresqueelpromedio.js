const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question("Ingrese la cantidad de datos: ", function(cantidadDatos) {
    cantidadDatos = parseInt(cantidadDatos);

    let datos = new Array(cantidadDatos);

    console.log("Ingrese los datos uno por uno:");
    leerDatos(datos, 0, cantidadDatos, 0, function() {
      let suma = datos.reduce((acc, val) => acc + val, 0);
      let promedio = suma / cantidadDatos;

      let contadorMayoresAlPromedio = 0;
      datos.forEach((dato) => {
        if (dato > promedio) {
          contadorMayoresAlPromedio++;
        }
      });

      console.log("El promedio es: " + promedio);
      console.log("La cantidad de datos mayores al promedio es: " + contadorMayoresAlPromedio);

      rl.close();
    });
  });
}

function leerDatos(datos, indice, cantidadDatos, suma, callback) {
  if (indice < cantidadDatos) {
    rl.question(`Dato ${indice + 1}: `, function(dato) {
      datos[indice] = parseFloat(dato);
      suma += datos[indice];
      leerDatos(datos, indice + 1, cantidadDatos, suma, callback);
    });
  } else {
    callback();
  }
}

// Iniciar el programa
main();
