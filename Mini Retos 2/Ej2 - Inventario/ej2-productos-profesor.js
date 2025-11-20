// EJERCICIO 2 - GESTOR DE PRODUCTOS / INVENTARIO
// Este archivo se debe enlazar en ej2-productos.html al final del body.

// 1. Clase Producto
// Cada producto tendrá: nombre, precio, cantidad
// PISTA: usar constructor(nombre, precio, cantidad)
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método opcional para obtener el total del producto (precio * cantidad)
    obtenerTotal() {
        return this.precio * this.cantidad;
    }
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
    errNombreProducto.textContent = "";
    errPrecioProducto.textContent = "";
    errCantidadProducto.textContent = "";
    msgOkProducto.textContent = "";
}

// 5. Manejador del formulario de productos
formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    limpiarMensajesProductos();

    let valido = true;

    // 5.1. Leer valores del formulario (usa .value y .trim() donde tenga sentido)
    const nombre = inputNombreProducto.value.trim();
    const precio = parseFloat(inputPrecioProducto.value);
    const cantidad = parseInt(inputCantidadProducto.value, 10);

    // 5.2. Validar que nombre no esté vacío.
    // Si está vacío, mostrar mensaje en errNombreProducto y poner valido = false.
    if (!nombre) {
        errNombreProducto.textContent = "El nombre es obligatorio.";
        valido = false;
    }

    // 5.3. Validar precio: debe ser un número > 0
    // PISTA: Number(precio) o parseFloat(precio)
    if (isNaN(precio) || precio <= 0) {
        errPrecioProducto.textContent = "Introduce un precio válido mayor que 0.";
        valido = false;
    }

    // 5.4. Validar cantidad: debe ser un número entero >= 1
    // PISTA: parseInt(cantidad)
    if (isNaN(cantidad) || cantidad < 1) {
        errCantidadProducto.textContent = "La cantidad debe ser al menos 1.";
        valido = false;
    }

    if (!valido) {
        return; // salir sin crear el producto
    }

    // 5.5. Crear una instancia de Producto con los datos del formulario
    const producto = new Producto(nombre, precio, cantidad);

    // 5.6. Añadir el producto al array productos
    productos.push(producto);

    // 5.7. Mostrar mensaje de éxito en msgOkProducto
    msgOkProducto.textContent = "Producto agregado correctamente.";

    // 5.8. Limpiar el formulario (formProducto.reset())
    formProducto.reset();
});

// 6. Función para mostrar los productos en la tabla
function mostrarProductosEnTabla() {
    // 6.1. Vaciar el tbody antes de rellenarlo
    tbodyProductos.innerHTML = "";

    // 6.2. Recorrer el array productos
    for (let i = 0; i < productos.length; i++) {
        const prod = productos[i];

        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = prod.nombre;

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = prod.precio.toFixed(2) + " €";

        const celdaCantidad = document.createElement("td");
        celdaCantidad.textContent = prod.cantidad;

        const celdaTotal = document.createElement("td");
        celdaTotal.textContent = prod.obtenerTotal().toFixed(2) + " €";

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaTotal);

        tbodyProductos.appendChild(fila);
    }
}

// 7. Función para calcular el valor total del inventario
function calcularValorTotal() {
    let total = 0;

    // 7.1. Recorrer el array productos y acumular en total
    // PISTA: total += (precio * cantidad) de cada producto
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].obtenerTotal();
    }

    // 7.2. Actualizar el texto de valorTotalSpan
    // Ejemplo: "Valor total: " + total + " €"
    valorTotalSpan.textContent = "Valor total: " + total.toFixed(2) + " €";
}

// 8. Eventos para los botones "Mostrar productos" y "Calcular valor total"
btnMostrarProductos.addEventListener("click", function() {
    // Llamar a mostrarProductosEnTabla();
    mostrarProductosEnTabla();
});

btnCalcularTotal.addEventListener("click", function() {
    // Llamar a calcularValorTotal();
    calcularValorTotal();
});
