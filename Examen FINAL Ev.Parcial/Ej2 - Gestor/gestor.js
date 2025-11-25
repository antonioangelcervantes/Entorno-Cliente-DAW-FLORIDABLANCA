// EJERCICIO 2 - Gestor de proyectos del ciclo
// Usa este archivo para completar la lógica del ejercicio.

// 1. Crea la clase Proyecto con:
//    - Constructor que reciba: titulo, grupo, modulo, notaPresentacion, notaTecnica
//    - Método media(): debe devolver la media de las dos notas
//    - Método estaAprobado(): debe devolver true si la media es >= 5, false en caso contrario

// 2. Crea un array "proyectos" para guardar todos los proyectos
//    que se vayan creando desde el formulario.

// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: tituloProyecto, grupoProyecto, moduloProyecto, notaPresentacion, notaTecnica
//    - Botón: btnAgregarProyecto
//    - Controles de filtrado: filtroModulo, filtroSoloAprobados
//    - Elementos de visualización: contenedorProyectos, resumenProyectos, mensajeVacio

// 4. Crea una función "crearTarjetaProyecto(proyecto)" que:
//    - cree un elemento <article> con clase "tarjeta-proyecto"
//    - dentro, añade:
//        * un <h3> con el título del proyecto
//        * párrafos <p> con clase "proyecto-detalle" para: grupo, módulo y media
//        * un párrafo para el estado (APROBADO/SUSPENSO) con clases "estado-aprobado" o "estado-suspenso"
//    - devuelva el elemento article creado

// 5. Crea una función "pintarProyectos(lista)" que:
//    - vacíe el contenedorProyectos
//    - si la lista está vacía, muestre el mensajeVacio
//    - si no, oculte mensajeVacio y recorra la lista creando una tarjeta por cada proyecto

// 6. Crea una función "actualizarResumen()" que:
//    - calcule usando bucles:
//        * total de proyectos
//        * cuántos están aprobados
//        * cuántos están suspensos
//    - actualice el texto de resumenProyectos con esa información.

// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)

// 7. Crea una función "aplicarFiltros()" que:
//    - cree una copia del array proyectos usando un bucle for
//    - aplique el filtro de módulo si no está en "todos" (usando bucle for)
//    - aplique el filtro de aprobados si el checkbox está marcado (usando bucle for)
//    - llame a pintarProyectos() con la lista filtrada
//    - llame a actualizarResumen()

// 8. En el evento click de btnAgregarProyecto:
//    - valida que:
//        * título, grupo y módulo no estén vacíos
//        * las notas sean números válidos entre 0 y 10 (usa isNaN para comprobar)
//    - si hay errores, muestra un alert() y detén la ejecución con return
//    - si todo es correcto:
//        * crea un nuevo objeto Proyecto y añádelo al array proyectos
//        * limpia los campos del formulario (ponlos en "")
//        * llama a aplicarFiltros() para actualizar la visualización

// 9. Añade eventos change a filtroModulo y filtroSoloAprobados:
//    - El evento "change" se dispara cuando el usuario modifica el valor de un select o checkbox
//    - En este caso, queremos que cada vez que el usuario cambie el filtro, se actualice la lista
//    - cada vez que cambien, llama a aplicarFiltros()
//    Estructura: elemento.addEventListener("change", function() { ... });
