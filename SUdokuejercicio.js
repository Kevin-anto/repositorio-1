function esSudokuCorrecto(sudoku) {
    // Verificar filas y columnas
    for (let i = 0; i < 9; i++) {
        if (!esFilaCorrecta(sudoku, i) || !esColumnaCorrecta(sudoku, i)) {
            return false;
        }
    }

    // Verificar regiones
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!esRegionCorrecta(sudoku, i, j)) {
                return false;
            }
        }
    }

    return true;
}

function esFilaCorrecta(sudoku, fila) {
    const presentes = new Array(9).fill(false);
    for (let i = 0; i < 9; i++) {
        const valor = sudoku[fila][i];
        if (presentes[valor - 1]) {
            return false; // Valor repetido en la fila
        }
        presentes[valor - 1] = true;
    }
    return true;
}

function esColumnaCorrecta(sudoku, columna) {
    const presentes = new Array(9).fill(false);
    for (let i = 0; i < 9; i++) {
        const valor = sudoku[i][columna];
        if (presentes[valor - 1]) {
            return false; // Valor repetido en la columna
        }
        presentes[valor - 1] = true;
    }
    return true;
}

function esRegionCorrecta(sudoku, inicioFila, inicioColumna) {
    const presentes = new Array(9).fill(false);
    for (let i = inicioFila; i < inicioFila + 3; i++) {
        for (let j = inicioColumna; j < inicioColumna + 3; j++) {
            const valor = sudoku[i][j];
            if (presentes[valor - 1]) {
                return false; // Valor repetido en la región
            }
            presentes[valor - 1] = true;
        }
    }
    return true;
}

// Ejemplo de un Sudoku resuelto
const sudokuResuelto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

if (esSudokuCorrecto(sudokuResuelto)) {
    console.log("La solución del Sudoku es correcta.");
} else {
    console.log("La solución del Sudoku es incorrecta.");
}
