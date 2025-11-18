// EJERCICIO 4 - MARCADOR INTERACTIVO
// Enlazar este archivo al final de ej4-marcador.html

// 1. Clase Equipo
// Cada equipo tiene un nombre y unos puntos actuales
class Equipo {
    // El constructor recibe el nombre del equipo
    // y los puntos iniciales (por defecto 0)
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0; // empieza siempre en 0
    }

    // Método para sumar puntos
    // cantidad será el número de puntos a sumar (1, 2 o 3)
    sumarPuntos(cantidad) {
        // PISTA: this.puntos = this.puntos + cantidad;
        // ...
    }

    // Método para dejar el marcador de este equipo a 0
    reiniciar() {
        // PISTA: this.puntos = 0;
        // ...
    }
}

// 2. Crear las instancias de Equipo
// Un objeto para el Equipo A y otro para el Equipo B
const equipoA = new Equipo("Equipo A");
const equipoB = new Equipo("Equipo B");

// 3. Referencias al DOM
const puntosA = document.getElementById("puntosA");
const puntosB = document.getElementById("puntosB");

const btnReiniciar = document.getElementById("btnReiniciar");
const btnDeshacer = document.getElementById("btnDeshacer");

// En vez de seleccionar cada botón de sumar uno a uno,
// podemos usar delegación de eventos sobre todo el documento
// o, si prefieres, sobre el body o el main.
const botonesSuma = document.querySelectorAll(".btn-sumar");

// 4. Historial de acciones para poder "deshacer"
// Cada acción puede ser un objeto con:
// { equipo: "A" o "B", puntos: cantidadSumada }
const historialAcciones = [];

// 5. Función para actualizar el marcador en pantalla
function actualizarMarcador() {
    // PISTA:
    // - puntosA.textContent debe mostrar equipoA.puntos
    // - puntosB.textContent debe mostrar equipoB.puntos
    // ...
}

// 6. Función que, a partir del texto "A" o "B", devuelve el objeto equipo correspondiente
function obtenerEquipoPorLetra(letra) {
    // PISTA: if (letra === "A") return equipoA; else return equipoB;
    // ...
}

// 7. Función para registrar una acción en el historial
// Se llamará cada vez que se sumen puntos
function registrarAccion(letraEquipo, puntosSumados) {
    // Crea un objeto con la información y añádelo al array historialAcciones
    // PISTA: historialAcciones.push({ equipo: letraEquipo, puntos: puntosSumados });
    // ...
}

// 8. Función para sumar puntos a un equipo (usada por botones y teclado)
function sumarAPartirDeDatos(letraEquipo, cantidad) {
    // 1) Obtener el objeto equipo correspondiente (A o B) usando obtenerEquipoPorLetra
    // 2) Llamar a sumarPuntos(cantidad) sobre ese equipo
    // 3) Registrar la acción en el historial con registrarAccion
    // 4) Actualizar el marcador en pantalla con actualizarMarcador()
    // ...
}

// 9. Manejador de clic para los botones de sumar
function manejarClickSuma(event) {
    // event.target será el elemento pulsado
    const boton = event.target;

    // Comprobar que el clic viene de un botón con clase "btn-sumar"
    if (!boton.classList.contains("btn-sumar")) {
        return; // si no es botón de sumar, salimos
    }

    // Leer los data-atributos:
    // data-equipo → "A" o "B"
    // data-suma   → "1", "2" o "3" (hay que convertirlo a número)
    const letraEquipo = boton.getAttribute("data-equipo");
    const cantidadTexto = boton.getAttribute("data-suma");

    // Convertir cantidadTexto a número
    // PISTA: const cantidad = Number(cantidadTexto);
    // ...

    // Llamar a sumarAPartirDeDatos con esa letra y esa cantidad
    // ...
}

// 10. Manejador de teclas (atajos de teclado)
// Q, W, E → Equipo A (1, 2, 3 puntos)
// I, O, P → Equipo B (1, 2, 3 puntos)
function manejarTeclado(event) {
    const tecla = event.key.toLowerCase(); // pasamos a minúscula para comparar

    // Puedes usar un switch o varios if
    // PISTA ORIENTATIVA:
    // - Si tecla === "q" → equipo A +1
    // - Si tecla === "w" → equipo A +2
    // - Si tecla === "e" → equipo A +3
    // - Si tecla === "i" → equipo B +1
    // - Si tecla === "o" → equipo B +2
    // - Si tecla === "p" → equipo B +3
    //
    // En cada caso:
    //   llamar a sumarAPartirDeDatos("A" o "B", puntos);
    // ...
}

// 11. Función para reiniciar el marcador
function reiniciarMarcador() {
    // Llamar al método reiniciar() de cada equipo
    // Vaciar el array historialAcciones (por ejemplo, historialAcciones.length = 0)
    // Actualizar el marcador en pantalla
    // ...
}

// 12. Función para deshacer la última acción
function deshacerUltimaAccion() {
    // Comprobar si hay acciones en el historial
    // Si no hay, puedes simplemente no hacer nada o mostrar un mensaje en la consola

    // Si hay acciones:
    //  1) Obtener el último elemento (historialAcciones[historialAcciones.length - 1])
    //  2) Saber qué equipo fue afectado (A o B) y cuántos puntos se sumaron
    //  3) Restar esos puntos al equipo correspondiente
    //  4) Eliminar la última acción del historial (método .pop())
    //  5) Actualizar el marcador en pantalla
    // ...
}

// 13. Asignar eventos

// 13.1. Clic en los botones de sumar
// Opción 1: añadir un listener a cada botón (for o forEach)
for (let i = 0; i < botonesSuma.length; i++) {
    botonesSuma[i].addEventListener("click", manejarClickSuma);
}
// (También se podría hacer delegación, pero así es más simple de ver)

// 13.2. Atajos de teclado (keydown) en todo el documento
document.addEventListener("keydown", manejarTeclado);

// 13.3. Clic en botón reiniciar
btnReiniciar.addEventListener("click", function() {
    // Llamar a reiniciarMarcador();
    // ...
});

// 13.4. Clic en botón deshacer
btnDeshacer.addEventListener("click", function() {
    // Llamar a deshacerUltimaAccion();
    // ...
});

// 14. Inicializar el marcador al cargar la página
actualizarMarcador();