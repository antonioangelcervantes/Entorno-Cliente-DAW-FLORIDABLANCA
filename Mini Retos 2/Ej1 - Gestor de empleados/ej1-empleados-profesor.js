// EJERCICIO 1 - GESTOR DE EMPLEADOS (VERSIÓN PROFESOR)
// Este script está pensado para usar con ej1-empleados.html

// 1. Referencias a los elementos del DOM
const formEmpleado = document.getElementById("formEmpleado");
const inputNombre = document.getElementById("nombre");
const inputPuesto = document.getElementById("puesto");
const inputSalario = document.getElementById("salario");

const errNombre = document.getElementById("errNombre");
const errPuesto = document.getElementById("errPuesto");
const errSalario = document.getElementById("errSalario");

const msgOk = document.getElementById("msgOk");

const btnMostrar = document.getElementById("btnMostrar");
const tbodyEmpleados = document.getElementById("tablaEmpleados");
const totalEmpleadosSpan = document.getElementById("totalEmpleados");

// 2. Array donde se guardan todos los empleados
// Cada empleado será un objeto con: nombre, puesto, salario
const empleados = [];

// 3. Función para limpiar mensajes de error y de éxito
function limpiarMensajes() {
  errNombre.textContent = "";
  errPuesto.textContent = "";
  errSalario.textContent = "";
  msgOk.textContent = "";
}

// 4. Validación del formulario
// Devuelve true si todo es correcto, false si hay errores
function validarFormulario(nombre, puesto, salarioTexto) {
  let valido = true;

  // Limpiamos errores previos
  limpiarMensajes();

  // Validar nombre
  if (nombre === "") {
    errNombre.textContent = "El nombre no puede estar vacío.";
    valido = false;
  }

  // Validar puesto
  if (puesto === "") {
    errPuesto.textContent = "El puesto no puede estar vacío.";
    valido = false;
  }

  // Validar salario
  if (salarioTexto === "") {
    errSalario.textContent = "El salario no puede estar vacío.";
    valido = false;
  } else {
    const salarioNumero = Number(salarioTexto);

    if (isNaN(salarioNumero)) {
      errSalario.textContent = "El salario debe ser un número.";
      valido = false;
    } else if (salarioNumero <= 0) {
      errSalario.textContent = "El salario debe ser mayor que 0.";
      valido = false;
    }
  }

  return valido;
}

// 5. Manejador del envío del formulario
formEmpleado.addEventListener("submit", function (event) {
  event.preventDefault(); // evitamos recarga de la página

  // Leemos valores del formulario
  const nombre = inputNombre.value.trim();
  const puesto = inputPuesto.value.trim();
  const salarioTexto = inputSalario.value.trim();

  // Validamos
  const esValido = validarFormulario(nombre, puesto, salarioTexto);

  if (!esValido) {
    // Si hay algún error, no seguimos
    return;
  }

  // Convertimos el salario a número
  const salarioNumero = Number(salarioTexto);

  // Creamos el objeto empleado
  const empleado = {
    nombre: nombre,
    puesto: puesto,
    salario: salarioNumero,
  };

  // Lo añadimos al array
  empleados.push(empleado);

  // Mostramos mensaje de éxito
  msgOk.textContent = "Empleado agregado correctamente.";

  // Actualizamos el contador de empleados (aunque aún no se haya pulsado "Mostrar empleados")
  actualizarTotalEmpleados();

  // Limpiamos el formulario para el siguiente registro
  formEmpleado.reset();
});

// 6. Función para pintar los empleados en la tabla
function mostrarEmpleadosEnTabla() {
  // Vaciamos el cuerpo de la tabla
  tbodyEmpleados.innerHTML = "";

  // Recorremos el array de empleados
  for (let i = 0; i < empleados.length; i++) {
    const emp = empleados[i];

    // Creamos una fila y sus celdas
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = emp.nombre;

    const celdaPuesto = document.createElement("td");
    celdaPuesto.textContent = emp.puesto;

    const celdaSalario = document.createElement("td");
    // Mostramos el salario tal cual o con toFixed(2) si quieres 2 decimales
    celdaSalario.textContent = emp.salario;

    // Añadimos las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPuesto);
    fila.appendChild(celdaSalario);

    // Añadimos la fila al tbody
    tbodyEmpleados.appendChild(fila);
  }
}

// 7. Función para actualizar el texto "Total empleados: X"
function actualizarTotalEmpleados() {
  const total = empleados.length;
  totalEmpleadosSpan.textContent = "Total empleados: " + total;
}

// 8. Evento del botón "Mostrar empleados"
btnMostrar.addEventListener("click", function () {
  mostrarEmpleadosEnTabla();
});
