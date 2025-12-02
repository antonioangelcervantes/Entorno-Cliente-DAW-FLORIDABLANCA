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
// const formProducto = document.getElementById("formProducto");


// 3. Array donde se guardarán los productos


// 4. Función para limpiar mensajes
function limpiarMensajesProductos() {
    
}

// 5. Manejador del formulario de productos
formProducto.addEventListener("submit", function(event) {
    event.preventDefault();

    limpiarMensajesProductos();

    let valido = true;

    // 5.1. Leer valores del formulario (usa .value y .trim() donde tenga sentido)
    //const nombre = inputNombreProducto.value.trim();
 

    // 5.2. Validar que nombre no esté vacío.
    // Si está vacío, mostrar mensaje en errNombreProducto y poner valido = false.
  

    // 5.3. Validar precio: debe ser un número > 0
    // PISTA: Number(precio) o parseFloat(precio)
   

    // 5.4. Validar cantidad: debe ser un número entero >= 1
    // PISTA: parseInt(cantidad)


    // 5.5. Crear una instancia de Producto con los datos del formulario
    // const producto = new Producto(nombre, precio, cantidad);

    // 5.6. Añadir el producto al array productos
  

    // 5.7. Mostrar mensaje de éxito en msgOkProducto
  

    // 5.8. Limpiar el formulario (formProducto.reset())
    // formProducto.reset();
});

// 6. Función para mostrar los productos en la tabla
function mostrarProductosEnTabla() {
    // 6.1. Vaciar el tbody antes de rellenarlo
    // tbodyProductos.innerHTML = "";

    // 6.2. Recorrer el array productos
   // for (let i = 0; i < productos.length; i++) {

// 7. Función para calcular el valor total del inventario
function calcularValorTotal() {
   
// 8. Eventos para los botones "Mostrar productos" y "Calcular valor total"}
