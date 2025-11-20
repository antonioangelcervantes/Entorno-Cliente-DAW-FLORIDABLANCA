// EJERCICIO 4 - MARCADOR INTERACTIVO (VERSIÓN PROFESOR)
// Usar con ej4-marcador.html

// 1. Clase Equipo: nombre + puntos
class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
    }

    // Suma puntos al marcador del equipo
    sumarPuntos(cantidad) {
        this.puntos = this.puntos + cantidad;
    }

    // Reinicia el marcador a 0
    reiniciar() {
        this.puntos = 0;
    }
}

// 2. Crear instancias de Equipo
const equipoA = new Equipo("Equipo A");
const equipoB = new Equipo("Equipo B");

// 3. Referencias al DOM
const puntosA = document.getElementById("puntosA");
const puntosB = document.getElementById("puntosB");

const btnReiniciar = document.getElementById("btnReiniciar");
const btnDeshacer = document.getElementById("btnDeshacer");

// Todos los botones de sumar (clase .btn-sumar)
const botonesSuma = document.querySelectorAll(".btn-sumar");

// 4. Historial de acciones para poder deshacer
// Cada acción: { equipo: "A" o "B", puntos: cantidad }
const historialAcciones = [];

// 5. Actualizar el marcador en pantalla
function actualizarMarcador() {
    puntosA.textContent = equipoA.puntos;
    puntosB.textContent = equipoB.puntos;
}

// 6. Devolver el objeto equipo según "A" o "B"
function obtenerEquipoPorLetra(letra) {
    if (letra === "A") {
        return equipoA;
    } else {
        return equipoB;
    }
}

// 7. Guardar en historial una acción (para poder deshacer)
function registrarAccion(letraEquipo, puntosSumados) {
    const accion = {
        equipo: letraEquipo,
        puntos: puntosSumados
    };

    historialAcciones.push(accion);
}

// 8. Sumar puntos a partir de letra ("A"/"B") y cantidad (1,2,3)
function sumarAPartirDeDatos(letraEquipo, cantidad) {
    const equipo = obtenerEquipoPorLetra(letraEquipo);

    // Sumar puntos al objeto
    equipo.sumarPuntos(cantidad);

    // Registrar acción en el historial
    registrarAccion(letraEquipo, cantidad);

    // Refrescar marcador
    actualizarMarcador();
}

// 9. Manejador de click para los botones de sumar
function manejarClickSuma(event) {
    const boton = event.target;

    // Asegurarse de que el click viene de un botón de sumar
    if (!boton.classList.contains("btn-sumar")) {
        return;
    }

    // data-equipo: "A" o "B"
    // data-suma: "1", "2" o "3"
    const letraEquipo = boton.getAttribute("data-equipo");
    const cantidadTexto = boton.getAttribute("data-suma");

    const cantidad = Number(cantidadTexto);

    if (isNaN(cantidad)) {
        return;
    }

    sumarAPartirDeDatos(letraEquipo, cantidad);
}

// 10. Manejador de teclado (atajos)
// Q, W, E → Equipo A (+1, +2, +3)
// I, O, P → Equipo B (+1, +2, +3)
function manejarTeclado(event) {
    const tecla = event.key.toLowerCase();

    if (tecla === "q") {
        sumarAPartirDeDatos("A", 1);
    } else if (tecla === "w") {
        sumarAPartirDeDatos("A", 2);
    } else if (tecla === "e") {
        sumarAPartirDeDatos("A", 3);
    } else if (tecla === "i") {
        sumarAPartirDeDatos("B", 1);
    } else if (tecla === "o") {
        sumarAPartirDeDatos("B", 2);
    } else if (tecla === "p") {
        sumarAPartirDeDatos("B", 3);
    }
}

// 11. Reiniciar marcador y limpiar historial
function reiniciarMarcador() {
    equipoA.reiniciar();
    equipoB.reiniciar();

    // Vaciar historial
    historialAcciones.length = 0;

    actualizarMarcador();
}

// 12. Deshacer última acción
function deshacerUltimaAccion() {
    if (historialAcciones.length === 0) {
        // No hay nada que deshacer
        return;
    }

    // Obtener la última acción y eliminarla del array
    const ultimaAccion = historialAcciones[historialAcciones.length - 1];
    historialAcciones.pop();

    const letraEquipo = ultimaAccion.equipo;
    const puntos = ultimaAccion.puntos;

    const equipo = obtenerEquipoPorLetra(letraEquipo);

    // Restar los puntos que se habían sumado
    equipo.puntos = equipo.puntos - puntos;

    // Por seguridad, evitar que el marcador baje de 0
    if (equipo.puntos < 0) {
        equipo.puntos = 0;
    }

    actualizarMarcador();
}

// 13. Asignar eventos

// 13.1. Eventos click para cada botón de sumar
for (let i = 0; i < botonesSuma.length; i++) {
    botonesSuma[i].addEventListener("click", manejarClickSuma);
}

// 13.2. Evento de teclado global
document.addEventListener("keydown", manejarTeclado);

// 13.3. Botón reiniciar
btnReiniciar.addEventListener("click", function() {
    reiniciarMarcador();
});

// 13.4. Botón deshacer
btnDeshacer.addEventListener("click", function() {
    deshacerUltimaAccion();
});

// 14. Inicializar marcador al cargar
actualizarMarcador();