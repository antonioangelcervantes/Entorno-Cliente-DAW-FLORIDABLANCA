// EJERCICIO 3 - PANEL DE INCIDENCIAS TÉCNICAS
// Enlazar este archivo al final de ej3-incidencias.html

// 1. Referencias principales del DOM
// Sugerencia: const formIncidencia = document.getElementById("#formIncidencia");

// 2. Estructura de datos para guardar las incidencias
// Sugerencia: usa un array de objetos.
// Cada objeto puede tener al menos: id, titulo, descripcion, estado.
let incidencias = [];
let siguienteId = 1; // puedes usarlo para asignar identificadores únicos

// 3. Función para limpiar mensajes de error y de éxito
function limpiarMensajes() {
    // Deja vacíos los textos de error y el mensaje OK
    // ...
}

// 4. Función para validar el formulario
// Devuelve true/false según si los datos son válidos
function validarFormulario(titulo, descripcion) {
    let esValido = true;

    // Borra mensajes anteriores
    limpiarMensajes();

    // Comprueba que el título no esté vacío
    // Comprueba que la descripción no esté vacía
    // Muestra mensajes en errTitulo y errDescripcion si hace falta
    // Si hay errores, esValido = false;

    return esValido;
}

// 5. Función para crear una incidencia (objeto) y guardarla en el array
function crearIncidencia(titulo, descripcion) {
    // Crea un objeto con las propiedades necesarias
    // Usa siguienteId para el id
    // Asigna el estado inicial "abierta"
    // Guarda la incidencia en el array incidencias
    // Incrementa siguienteId
}

// 6. Función para actualizar el contador de incidencias abiertas
function actualizarContador() {
    // Recorre el array incidencias
    // Cuenta cuántas están con estado "abierta"
    // Actualiza el texto de contadorAbiertas
}

// 7. Función para "pintar" todas las incidencias en la lista <ul>
function renderizarIncidencias() {
    // Borra el contenido actual de listaIncidencias

    // Recorre el array incidencias
    // Por cada incidencia:
    //  - crea un <li> con clase "item-incidencia"
    //  - dentro, crea elementos para el título, la descripción y el estado
    //  - añade dos botones:
    //      * "Marcar como resuelta" (clase btn-peque btn-resuelta)
    //      * "Eliminar" (clase btn-peque btn-eliminar)
    //  - usa data-atributos (por ejemplo data-id) para guardar el id de la incidencia
    //  - añade el <li> a la lista
}

// 8. Manejador del envío del formulario (crear incidencia)
formIncidencia.addEventListener("submit", function(event) {
    event.preventDefault();

    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();

    // Valida los datos. Si no son válidos, termina aquí.
    // if (!validarFormulario(titulo, descripcion)) {
    //     return;
    // }

    // Crea la incidencia y guárdala
    // crearIncidencia(titulo, descripcion);

    // Limpia el formulario y muestra un mensaje de éxito
    // formIncidencia.reset();
    // msgOkIncidencia.textContent = "Incidencia creada correctamente.";

    // Vuelve a pintar la lista y actualiza el contador
    // renderizarIncidencias();
    // actualizarContador();
});

// 9. Delegación de eventos en la lista de incidencias
// Aquí se gestionan clicks en "Marcar como resuelta" y "Eliminar"
listaIncidencias.addEventListener("click", function(event) {
    const elemento = event.target;

    // Comprueba si se ha pulsado un botón de resuelta o de eliminar
    // Usa clases (classList.contains) o data-atributos para decidir qué hacer

    // 1) Obtener el id de la incidencia desde el elemento pulsado (por ejemplo, del li padre)
    // 2) Si es botón "resuelta": cambia el estado de la incidencia en el array
    // 3) Si es botón "eliminar": elimina la incidencia del array
    // 4) Llama a renderizarIncidencias() y actualizarContador() después de cambiar datos
});