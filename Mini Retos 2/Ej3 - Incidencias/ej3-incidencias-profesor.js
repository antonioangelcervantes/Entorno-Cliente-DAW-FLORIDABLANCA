// EJERCICIO 3 - PANEL DE INCIDENCIAS TÉCNICAS (VERSIÓN PROFESOR)
// Usar con ej3-incidencias.html

// 1. Referencias principales del DOM
const formIncidencia = document.getElementById("formIncidencia");
const inputTitulo = document.getElementById("tituloIncidencia");
const inputDescripcion = document.getElementById("descIncidencia");

const errTitulo = document.getElementById("errTituloIncidencia");
const errDescripcion = document.getElementById("errDescIncidencia");

const msgOkIncidencia = document.getElementById("msgOkIncidencia");

const listaIncidencias = document.getElementById("listaIncidencias");
const contadorAbiertas = document.getElementById("contadorAbiertas");

// 2. Estructura de datos para guardar las incidencias
// Cada incidencia: { id, titulo, descripcion, estado }
let incidencias = [];
let siguienteId = 1;

// 3. Función para limpiar mensajes
function limpiarMensajes() {
    errTitulo.textContent = "";
    errDescripcion.textContent = "";
    msgOkIncidencia.textContent = "";
}

// 4. Validación del formulario
function validarFormulario(titulo, descripcion) {
    let esValido = true;

    limpiarMensajes();

    if (titulo === "") {
        errTitulo.textContent = "El título no puede estar vacío.";
        esValido = false;
    }

    if (descripcion === "") {
        errDescripcion.textContent = "La descripción no puede estar vacía.";
        esValido = false;
    }

    return esValido;
}

// 5. Crear y guardar incidencia
function crearIncidencia(titulo, descripcion) {
    const nuevaIncidencia = {
        id: siguienteId,
        titulo: titulo,
        descripcion: descripcion,
        estado: "abierta" // valores posibles: "abierta" o "resuelta"
    };

    incidencias.push(nuevaIncidencia);
    siguienteId = siguienteId + 1;
}

// 6. Actualizar contador de incidencias abiertas
function actualizarContador() {
    let abiertas = 0;

    for (let i = 0; i < incidencias.length; i++) {
        if (incidencias[i].estado === "abierta") {
            abiertas = abiertas + 1;
        }
    }

    contadorAbiertas.textContent = "Incidencias abiertas: " + abiertas;
}

// 7. Pintar las incidencias en la lista <ul>
function renderizarIncidencias() {
    // Vaciar la lista
    listaIncidencias.innerHTML = "";

    // Recorrer array de incidencias
    for (let i = 0; i < incidencias.length; i++) {
        const inc = incidencias[i];

        // Crear <li> principal
        const li = document.createElement("li");
        li.classList.add("item-incidencia");
        li.setAttribute("data-id", inc.id);

        // Badge de estado
        const spanEstado = document.createElement("span");
        spanEstado.classList.add("badge-estado");
        if (inc.estado === "abierta") {
            spanEstado.classList.add("estado-abierta");
            spanEstado.textContent = "Abierta";
        } else {
            spanEstado.classList.add("estado-resuelta");
            spanEstado.textContent = "Resuelta";
        }

        // Título
        const h3 = document.createElement("h3");
        h3.textContent = inc.titulo;

        // Descripción
        const pDesc = document.createElement("p");
        pDesc.textContent = inc.descripcion;

        // Contenedor de botones
        const divAcciones = document.createElement("div");
        divAcciones.classList.add("acciones-incidencia");

        const btnResuelta = document.createElement("button");
        btnResuelta.textContent = "Marcar como resuelta";
        btnResuelta.classList.add("btn-peque", "btn-resuelta");

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-peque", "btn-eliminar");

        divAcciones.appendChild(btnResuelta);
        divAcciones.appendChild(btnEliminar);

        // Montar el <li>
        li.appendChild(spanEstado);
        li.appendChild(h3);
        li.appendChild(pDesc);
        li.appendChild(divAcciones);

        // Añadir al <ul>
        listaIncidencias.appendChild(li);
    }
}

// 8. Manejador del submit del formulario
formIncidencia.addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();

    const esValido = validarFormulario(titulo, descripcion);

    if (!esValido) {
        return;
    }

    crearIncidencia(titulo, descripcion);

    formIncidencia.reset();
    msgOkIncidencia.textContent = "Incidencia creada correctamente.";

    renderizarIncidencias();
    actualizarContador();
});

// 9. Delegación de eventos en la lista de incidencias
listaIncidencias.addEventListener("click", function(event) {
    const elemento = event.target;

    // Solo nos interesa si se hace clic en un botón
    if (!elemento.classList.contains("btn-resuelta") &&
        !elemento.classList.contains("btn-eliminar")) {
        return;
    }

    // Localizar el <li> correspondiente
    const li = elemento.parentNode.parentNode; // div -> li
    const idTexto = li.getAttribute("data-id");
    const idIncidencia = Number(idTexto);

    // Buscar la incidencia en el array
    for (let i = 0; i < incidencias.length; i++) {
        if (incidencias[i].id === idIncidencia) {
            // Marcar como resuelta
            if (elemento.classList.contains("btn-resuelta")) {
                incidencias[i].estado = "resuelta";
            }

            // Eliminar incidencia
            if (elemento.classList.contains("btn-eliminar")) {
                incidencias.splice(i, 1);
            }

            break; // salir del bucle
        }
    }

    // Actualizar vista y contador
    renderizarIncidencias();
    actualizarContador();
});

// 10. Inicialización inicial
renderizarIncidencias();
actualizarContador();