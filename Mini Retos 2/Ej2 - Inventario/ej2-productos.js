// EJERCICIO 2 - GESTOR DE PRODUCTOS / INVENTARIO
// Este archivo se debe enlazar en ej2-productos.html al final del body.

// 1. Clase Producto
// Cada producto tendrá: nombre, precio, cantidad
// PISTA: usar constructor(nombre, precio, cantidad)
class Producto {
    // constructor(...) {
    //     this.nombre = ...;
    //     this.precio = ...;
    //     this.cantidad = ...;
    // }

    // Método opcional para obtener el total del producto (precio * cantidad)
    // obtenerTotal() {
    //     ...
    // }
}

// 2. Referencias a los elementos del DOM
const formProducto = document.getElementById("formProducto");

const inputNombreProducto = document.getElementById("nombreProducto");
const inputPrecioProducto = document.getElementById("precioProducto");
const inputCantidadProducto = document.getElementById("cantidadProducto");

const errNombreProducto = document.getElementById("errNombreProducto");
const errPrecioProducto = document.getElementById("errPrecioProducto");
const errCantidadProducto = document.getElementById("errCantidadProducto");

const msgOkProducto = document.getElementById("msgOkProducto");

const btnMostrarProductos = document.getElementById("btnMostrarProductos");
const btnCalcularTotal = document.getElementById("btnCalcularTotal");

const tbodyProductos = document.getElementById("tablaProductos");
const valorTotalSpan = document.getElementById("valorTotal");

// 3. Array donde se guardarán los productos
const productos = [];

// 4. Función para limpiar mensajes
function limpiarMensajesProductos() {
    // PISTA: poner todos los .textContent de errores y msgOkProducto a ""
    // errNombreProducto.textContent = "";
    // ...
}

// 5. Manejador del formulario de productos
formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    limpiarMensajesProductos();

    let valido = true;

    // 5.1. Leer valores del formulario (usa .value y .trim() donde tenga sentido)
    // const nombre = ...
    // const precio = ...
    // const cantidad = ...

    // 5.2. Validar que nombre no esté vacío.
    // Si está vacío, mostrar mensaje en errNombreProducto y poner valido = false.

    // 5.3. Validar precio: debe ser un número > 0
    // PISTA: Number(precio) o parseFloat(precio)

    // 5.4. Validar cantidad: debe ser un número entero >= 1
    // PISTA: parseInt(cantidad)

    // if (!valido) {
    //     return; // salir sin crear el producto
    // }

    // 5.5. Crear una instancia de Producto con los datos del formulario
    // const producto = new Producto(...);

    // 5.6. Añadir el producto al array productos

    // 5.7. Mostrar mensaje de éxito en msgOkProducto

    // 5.8. Limpiar el formulario (formProducto.reset())
});

// 6. Función para mostrar los productos en la tabla
function mostrarProductosEnTabla() {
    // 6.1. Vaciar el tbody antes de rellenarlo
    // tbodyProductos.innerHTML = "";

    // 6.2. Recorrer el array productos
    // for (let i = 0; i < productos.length; i++) {
    //     const prod = productos[i];
    //
    //     // Crear fila <tr> y celdas <td>
    //     // nombre, precio, cantidad, totalProducto
    //
    //     // PISTA: el total del producto es precio * cantidad.
    //
    //     // Añadir celdas a la fila
    //     // Añadir fila al tbody
    // }
}

// 7. Función para calcular el valor total del inventario
function calcularValorTotal() {
    let total = 0;

    // 7.1. Recorrer el array productos y acumular en total
    // PISTA: total += (precio * cantidad) de cada producto

    // 7.2. Actualizar el texto de valorTotalSpan
    // Ejemplo: "Valor total: " + total + " €"
}

// 8. Eventos para los botones "Mostrar productos" y "Calcular valor total"
btnMostrarProductos.addEventListener("click", function() {
    // Llamar a mostrarProductosEnTabla();
});

btnCalcularTotal.addEventListener("click", function() {
    // Llamar a calcularValorTotal();
});