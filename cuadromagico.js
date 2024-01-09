const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question("Ingrese el tamaño del cuadrado (n): ", function(n) {
    n = parseInt(n);

    let cuadrado = new Array(n);
    for (let i = 0; i < n; i++) {
      cuadrado[i] = new Array(n);
    }

    console.log("Ingrese los elementos del cuadrado uno por uno:");
    leerElementosCuadrado(cuadrado, 0, 0, n, function() {
      let expectedValue = 1;
      let esConsecutivo = true;

      for (let i = 0; i < n && esConsecutivo; i++) {
        for (let j = 0; j < n; j++) {
          if (cuadrado[i][j] !== expectedValue) {
            esConsecutivo = false;
            break;
          }
          expectedValue++;
        }
      }

      let esCuadradoMagico = checkCuadradoMagico(cuadrado);

      if (esConsecutivo) {
        console.log(`El cuadrado está conformado por los números consecutivos desde 1 hasta ${n * n}`);
      } else {
        console.log(`El cuadrado NO está conformado por los números consecutivos desde 1 hasta ${n * n}`);
      }

      if (esCuadradoMagico) {
        console.log("Es un cuadrado mágico.");
      } else {
        console.log("NO es un cuadrado mágico.");
      }

      rl.close();
    });
  });
}

function leerElementosCuadrado(cuadrado, i, j, n, callback) {
  if (i < n) {
    if (j < n) {
      rl.question(`Elemento en la posición [${i + 1}][${j + 1}]: `, function(elemento) {
        cuadrado[i][j] = parseInt(elemento);
        leerElementosCuadrado(cuadrado, i, j + 1, n, callback);
      });
    } else {
      leerElementosCuadrado(cuadrado, i + 1, 0, n, callback);
    }
  } else {
    callback();
  }
}

function checkCuadradoMagico(cuadrado) {
  let n = cuadrado.length;
  let sumaFila = 0;
  let sumaColumna = 0;
  let sumaDiagonalPrincipal = 0;
  let sumaDiagonalSecundaria = 0;

  for (let j = 0; j < n; j++) {
    sumaFila += cuadrado[0][j];
  }

  for (let i = 1; i < n; i++) {
    let sumaFilaActual = 0;
    for (let j = 0; j < n; j++) {
      sumaFilaActual += cuadrado[i][j];
    }
    if (sumaFilaActual !== sumaFila) {
      return false;
    }
  }

  for (let j = 0; j < n; j++) {
    let sumaColumnaActual = 0;
    for (let i = 0; i < n; i++) {
      sumaColumnaActual += cuadrado[i][j];
    }
    if (sumaColumnaActual !== sumaFila) {
      return false;
    }
  }

  for (let i = 0; i < n; i++) {
    sumaDiagonalPrincipal += cuadrado[i][i];
  }

  for (let i = 0; i < n; i++) {
    sumaDiagonalSecundaria += cuadrado[i][n - 1 - i];
  }

  return sumaDiagonalPrincipal === sumaFila && sumaDiagonalSecundaria === sumaFila;
}

// Iniciar el programa
main();
