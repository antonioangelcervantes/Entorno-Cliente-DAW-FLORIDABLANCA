// EJERCICIO 3 - Panel de incidencias
// Usa clases, arrays, filtros combinados y delegación de eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)

// 1. Crea la clase Incidencia con:
//    - Constructor que reciba: descripcion, aula, tipo
//    - Propiedad estado: debe inicializarse automáticamente en "abierta"
//    - Método avanzarEstado(): debe cambiar el estado siguiendo esta lógica:
//        * si está en "abierta" → cambia a "en-curso"
//        * si está en "en-curso" → cambia a "resuelta"
//        * si está en "resuelta" → no hace nada (ya está en el estado final)
//    - Método resetEstado(): debe volver el estado a "abierta"

// 2. Crea un array "incidencias" que guardará todos los objetos Incidencia.

// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: descripcionIncidencia, aulaIncidencia, tipoIncidencia
//    - Botón: btnRegistrarIncidencia
//    - Controles de filtrado: filtroAula, filtroEstado
//    - Elementos de visualización: contenedorIncidencias, mensajeVacio, resumenIncidencias

// 4. Crea una función "pintarIncidencias(lista)" que:
//    - vacíe el contenedorIncidencias 
//    - si lista está vacía → mostrar mensajeVacio y salir con return
//    - si no → ocultar mensajeVacio
//    - recorrer lista con un bucle for y por cada incidencia crear:
//        * un <div> con clase "tarjeta"
//        * un <h3> con el texto "Incidencia #" + número
//        * párrafos <p> con clase "detalle" para: descripción, aula y tipo
//        * un párrafo para el estado con clases condicionales:
//            - "detalle estado estado-abierta" si estado === "abierta"
//            - "detalle estado estado-en-curso" si estado === "en-curso"
//            - "detalle estado estado-resuelta" si estado === "resuelta"
//        * un <div> con clase "acciones" que contenga DOS botones:
//            - Botón "Avanzar estado" con clase "btn-mini", data-op="avanzar" y data-index con el índice
//            - Botón "Volver a abierta" con clase "btn-mini", data-op="reset" y data-index con el índice
//    - añadir cada tarjeta al contenedorIncidencias

// 5. Crea una función "actualizarResumen()" que:
//    - recorra el array original "incidencias" usando un bucle for
//    - cuente usando contadores:
//        * cuántas están en "abierta"
//        * cuántas están en "en-curso"
//        * cuántas están en "resuelta"
//    - actualice el texto de resumenIncidencias con el formato:
//      "Abiertas: X | En curso: Y | Resueltas: Z"

// 6. Crea la función "aplicarFiltros()" que:
//    - cree una copia del array incidencias usando un bucle for
//    - obtenga los valores de filtroAula.value y filtroEstado.value
//    - si filtroAula no es "todas", filtra la copia para dejar solo las incidencias de esa aula
//    - si filtroEstado no es "todas", filtra la copia para dejar solo las incidencias en ese estado
//    - usa bucles for para hacer los filtros
//    - llame a pintarIncidencias(listaFiltrada) con la lista filtrada
//    - llame a actualizarResumen()

// 7. Evento click en btnRegistrarIncidencia:
//    - valida que:
//        * descripcion no esté vacía
//        * aula no esté vacía
//    - si hay errores, muestra un alert() con mensaje apropiado y detén con return
//    - si todo es válido:
//        * crea un nuevo objeto Incidencia con los datos
//        * añádelo al array incidencias
//        * limpia los campos del formulario (ponlos en "")
//        * resetea tipoIncidencia a "Hardware"
//        * llama a aplicarFiltros() para actualizar la visualización

// 8. Delegación de eventos en contenedorIncidencias:
//    - Añade UN SOLO addEventListener("click", ...) al contenedorIncidencias
//    - Dentro de la función del evento:
//        * usa event.target apropiado para saber qué operación ejecutar
//        * usa event.target apropiado para saber qué incidencia modificar
//        * convierte el index a Number()
//        * si data-op es "avanzar" → llama a incidencias[index].avanzarEstado()
//        * si data-op es "reset" → llama a incidencias[index].resetEstado()
//        * después de cualquier cambio, llama a aplicarFiltros() para actualizar

// 9. Eventos de filtros:
//    - filtroAula.addEventListener("change", aplicarFiltros)
//    - filtroEstado.addEventListener("change", aplicarFiltros)

// 10. Al cargar la página puedes dejar todo vacío o crear
//     1–2 incidencias de ejemplo.
//     Luego llama a aplicarFiltros() y a actualizarResumen().
