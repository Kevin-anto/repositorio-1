const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  // Solicitar al usuario el tamaño de la lista
  rl.question("Ingrese el tamaño de la lista: ", function(n) {
    n = parseInt(n);

    // Crear un array para almacenar la lista de números
    let numeros = new Array(n);

    // Solicitar al usuario que ingrese los números
    console.log("Ingrese la lista de números:");
    leerNumeros(numeros, 0, function() {
      // Solicitar al usuario el valor x
      rl.question("Ingrese el valor de x: ", function(x) {
        x = parseInt(x);

        // Contar cuántos números son mayores que x
        let contador = numeros.filter(numero => numero > x).length;

        // Mostrar el resultado
        console.log(`La cantidad de números mayores que ${x} es: ${contador}`);

        // Cerrar la interfaz de lectura y escritura
        rl.close();
      });
    });
  });
}

function leerNumeros(numeros, indice, callback) {
  if (indice < numeros.length) {
    rl.question(`Número ${indice + 1}: `, function(numero) {
      numeros[indice] = parseInt(numero);
      leerNumeros(numeros, indice + 1, callback);
    });
  } else {
    callback();
  }
}

// Iniciar el programa
main();
