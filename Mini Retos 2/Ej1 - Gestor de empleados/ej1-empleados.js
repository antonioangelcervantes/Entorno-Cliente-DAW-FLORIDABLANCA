// EJERCICIO 1 - GESTOR DE EMPLEADOS
// Este archivo se debe enlazar en ej1-empleados.html al final del body.

// 1. Captura las referencias a los elementos del DOM
// const formEmpleado = document.getElementById("formEmpleado");


// 2. Array donde se guardarán los empleados
// Cada empleado puede ser un objeto con: nombre, puesto, salario
const empleados = [];

// 3. Función opcional para limpiar mensajes de error y OK
function limpiarMensajes() {
    // PISTA: deja los .textContent de los errores y del mensaje OK en cadena vacía
    // errNombre.textContent = "";
    // ...
}

// 4. Manejador del envío del formulario
formEmpleado.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que se recargue la página

    limpiarMensajes();

    // PISTA: crea una variable valido = true y cámbiala a false cuando haya errores
    let valido = true;

    // 4.1. Leer los valores de los inputs (usa .value y .trim())
    // const nombre = ...
    // const puesto = ...
    // const salario = ...

    // 4.2. Comprobar que nombre y puesto no están vacíos
    // Si están vacíos, muestra un mensaje en el <p> de error correspondiente
    // y marca valido = false

    // 4.3. Comprobar que salario tiene un número correcto (> 0)
    // PISTA: Number(salario) o parseFloat(salario)

    // 4.4. Si NO es válido, termina la función aquí (return;)
    // if (!valido) {
    //     return;
    // }

    // 4.5. Crear el objeto empleado con las propiedades necesarias
    // const empleado = {
    //     nombre: ...,
    //     puesto: ...,
    //     salario: ...
    // };

    // 4.6. Añadir el empleado al array empleados (método .push)

    // 4.7. Mostrar un mensaje de éxito en msgOk (por ejemplo: "Empleado agregado correctamente")
    // msgOk.textContent = "...";

    // 4.8. Limpiar el formulario (puedes usar formEmpleado.reset())
});

// 5. Función para actualizar la tabla de empleados en el DOM
function mostrarEmpleadosEnTabla() {
    // 5.1. Vaciar el cuerpo de la tabla antes de volver a rellenarlo
    // PISTA: tbodyEmpleados.innerHTML = "";

    // 5.2. Recorrer el array empleados (for clásico o for...of)
    // por cada empleado:
    //  - crear una fila <tr>
    //  - crear tres celdas <td> (nombre, puesto, salario)
    //  - añadir las celdas a la fila
    //  - añadir la fila al tbody

    // 5.3. Actualizar el texto de totalEmpleadosSpan
    // PISTA: "Total empleados: " + empleados.length
}

// 6. Evento del botón "Mostrar empleados"
btnMostrar.addEventListener("click", function() {
    // Llama a la función que se encarga de pintar la tabla
    // mostrarEmpleadosEnTabla();
});