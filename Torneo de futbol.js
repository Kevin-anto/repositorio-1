// Importar la clase readline de Node.js para leer la entrada del usuario
const readline = require('readline');

// Crear una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear un array para almacenar los nombres de los equipos
let equipos = new Array(8);

// Función para obtener el nombre de la ronda
function obtenerNombreRonda(ronda) {
    switch (ronda) {
        case 1:
            return "Cuartos";
        case 2:
            return "Semifinales";
        case 3:
            return "Finales";
        default:
            return "Ronda Desconocida";
    }
}

// Función para realizar el torneo
function realizarTorneo() {
    // Pedir al usuario que ingrese los nombres de los equipos
    console.log("Ingrese los nombres de los equipos:");
    for (let i = 0; i < 8; i++) {
        rl.question(`Equipo ${i + 1}: `, (respuesta) => {
            equipos[i] = respuesta;

            // Verificar si se han ingresado todos los equipos
            if (i === 7) {
                // Realizar los partidos y avanzar en las rondas
                for (let ronda = 1; ronda <= 3; ronda++) {
                    console.log(`\nRonda ${obtenerNombreRonda(ronda)}:`);

                    for (let j = 0; j < equipos.length; j += 2) {
                        let equipoA = equipos[j];
                        let equipoB = equipos[j + 1];

                        rl.question(`a. ${equipoA} - b. ${equipoB}: `, (ganador) => {
                            // Avanzar al siguiente ronda
                            equipos[j / 2] = ganador;

                            // Verificar si se han jugado todos los partidos de la ronda
                            if (j === equipos.length - 2) {
                                // Verificar si se han completado todas las rondas
                                if (ronda === 3) {
                                    // Mostrar al campeón
                                    console.log(`\nEl campeón es: ${equipos[0]}`);
                                    // Cerrar la interfaz de lectura y escritura
                                    rl.close();
                                } else {
                                    // Continuar con la siguiente ronda
                                    realizarTorneo();
                                }
                            }
                        });
                    }
                }
            }
        });
    }
}

// Iniciar el torneo
realizarTorneo();
