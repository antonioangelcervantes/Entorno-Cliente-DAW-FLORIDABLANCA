// EJERCICIO 5 - CATÁLOGO INTERACTIVO
// Enlazar al final de ej5-catalogo.html

// Clase Producto: nombre, categoria, precio, stock (true/false)
class Producto {
    // Crea un constructor con esos parámetros
    // Puedes añadir métodos auxiliares si lo ves útil (por ejemplo, para texto de stock)
}

// Array con algunos productos de ejemplo (instancias de Producto)
// Ejemplo de categorías: "periferico", "almacenamiento", "pantalla", "otro"

const productos = [
    // new Producto("Teclado mecánico", "periferico", 49.99, true),
    // ...
];

// Referencias al DOM: buscador, selectCategoria, checkSoloStock, contenedorTarjetas, mensajeSinResultados

// Función que recibe un array de productos y los "pinta" en el contenedor
function renderizarProductos(lista) {
    // Vacía el contenedor de tarjetas

    // Si la lista está vacía:
    //  - mostrar el mensajeSinResultados
    //  - y salir de la función

    // Si hay elementos:
    //  - ocultar mensajeSinResultados
    //  - recorrer la lista y crear un div.tarjeta por cada producto
    //  - dentro de la tarjeta, crear:
    //      * h3 con el nombre
    //      * span o p con la categoría (badge-categoria)
    //      * p con el precio
    //      * p indicando si hay stock (stock-ok o stock-no)
    //  - añadir listeners de mouseover / mouseout si se quiere cambiar ligeramente el estilo
}

// Función que aplica los filtros actuales al array de productos
function obtenerProductosFiltrados() {
    // Leer el texto del buscador, la categoría seleccionada y el checkbox de stock

    // Crear un nuevo array filtrado a partir de productos:
    //  - por nombre: incluye si contiene el texto del buscador (toLowerCase)
    //  - por categoría: si selectCategoria no es "todos", filtra por esa categoría
    //  - por stock: si checkSoloStock está marcado, filtra para que solo aparezcan los que tienen stock true

    // Devolver el array filtrado
}

// Función principal que actualiza la vista según los filtros
function actualizarVista() {
    // Llama a obtenerProductosFiltrados()
    // Llama a renderizarProductos() con el resultado
}

// Eventos:
// - input en el buscador (para filtrar en tiempo real)
// - change en el selectCategoria
// - change en el checkSoloStock

// En cada evento, llamar a actualizarVista()

// Llamar a actualizarVista() una vez al cargar la página para mostrar el catálogo inicial