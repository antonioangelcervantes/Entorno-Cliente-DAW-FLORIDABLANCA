// EJERCICIO 5 - CATÁLOGO INTERACTIVO (VERSIÓN PROFESOR)
// Usar con ej5-catalogo.html

// 1. Clase Producto
// nombre: string
// categoria: string ("periferico", "almacenamiento", "pantalla", "otro")
// precio: número
// stock: boolean (true = hay stock, false = sin stock)
class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

// 2. Array de productos de ejemplo (catálogo base)
const productos = [
    new Producto("Teclado mecánico", "periferico", 49.99, true),
    new Producto("Ratón inalámbrico", "periferico", 19.95, true),
    new Producto("Disco SSD 1TB", "almacenamiento", 89.50, true),
    new Producto("Disco duro 2TB", "almacenamiento", 65.00, false),
    new Producto("Monitor 24\" FHD", "pantalla", 129.90, true),
    new Producto("Monitor 27\" 2K", "pantalla", 229.00, false),
    new Producto("Alfombrilla gaming", "periferico", 14.99, true),
    new Producto("Caja externa USB 3.0", "almacenamiento", 25.00, true),
    new Producto("Soporte para monitor", "otro", 29.95, true),
    new Producto("Luz LED escritorio", "otro", 18.50, false)
];

// 3. Referencias al DOM
const buscadorNombre = document.getElementById("buscadorNombre");
const selectCategoria = document.getElementById("selectCategoria");
const checkSoloStock = document.getElementById("checkSoloStock");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const mensajeSinResultados = document.getElementById("mensajeSinResultados");

// 4. Función para "pintar" una lista de productos en el contenedor
function renderizarProductos(lista) {
    // Vaciar el contenedor
    contenedorTarjetas.innerHTML = "";

    // Si no hay productos, mostramos el mensaje de "sin resultados"
    if (lista.length === 0) {
        mensajeSinResultados.style.display = "block";
        return;
    }

    // Si hay productos, ocultamos el mensaje
    mensajeSinResultados.style.display = "none";

    // Recorrer la lista y crear una tarjeta por producto
    for (let i = 0; i < lista.length; i++) {
        const prod = lista[i];

        // Crear el contenedor de la tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Nombre (h3)
        const h3 = document.createElement("h3");
        h3.textContent = prod.nombre;

        // Categoría (badge)
        const spanCategoria = document.createElement("span");
        spanCategoria.classList.add("badge-categoria");
        // Mostramos la categoría con mayúscula inicial
        spanCategoria.textContent = formatearCategoria(prod.categoria);

        // Precio
        const pPrecio = document.createElement("p");
        pPrecio.textContent = "Precio: " + prod.precio.toFixed(2) + " €";

        // Stock
        const pStock = document.createElement("p");
        if (prod.stock) {
            pStock.textContent = "En stock";
            pStock.classList.add("stock-ok");
        } else {
            pStock.textContent = "Sin stock";
            pStock.classList.add("stock-no");
        }

        // Añadir elementos a la tarjeta
        tarjeta.appendChild(h3);
        tarjeta.appendChild(spanCategoria);
        tarjeta.appendChild(pPrecio);
        tarjeta.appendChild(pStock);

        // Listeners opcionales de mouseover / mouseout para resaltar tarjeta
        tarjeta.addEventListener("mouseover", function() {
            // Podrían hacer algo extra si quisieran
            // Aquí se podría cambiar estilo, pero ya hay :hover en CSS
        });

        tarjeta.addEventListener("mouseout", function() {
            // Reset opcional
        });

        // Añadir la tarjeta al contenedor
        contenedorTarjetas.appendChild(tarjeta);
    }
}

// Función auxiliar para formatear el texto de la categoría
// "periferico" → "Periférico", etc.
function formatearCategoria(categoria) {
    if (categoria === "periferico") {
        return "Periférico";
    } else if (categoria === "almacenamiento") {
        return "Almacenamiento";
    } else if (categoria === "pantalla") {
        return "Pantalla";
    } else {
        return "Otro";
    }
}

// 5. Función que aplica los filtros actuales al array de productos
function obtenerProductosFiltrados() {
    const textoBuscado = buscadorNombre.value.trim().toLowerCase();
    const categoriaSeleccionada = selectCategoria.value; // "todos" o categoría concreta
    const soloStock = checkSoloStock.checked;

    // Creamos un nuevo array filtrado
    const filtrados = [];

    for (let i = 0; i < productos.length; i++) {
        const prod = productos[i];

        // 1) Filtro por nombre (buscador)
        // Si textoBuscado está vacío, no filtramos por nombre.
        // Si no está vacío, el nombre del producto debe contener ese texto.
        const nombreEnMinusculas = prod.nombre.toLowerCase();
        let pasaFiltroNombre = true;

        if (textoBuscado !== "") {
            if (nombreEnMinusculas.indexOf(textoBuscado) === -1) {
                pasaFiltroNombre = false;
            }
        }

        // 2) Filtro por categoría
        // Si select es "todos" → pasa cualquiera.
        // Si no, solo pasa si prod.categoria coincide con la seleccionada.
        let pasaFiltroCategoria = true;

        if (categoriaSeleccionada !== "todos") {
            if (prod.categoria !== categoriaSeleccionada) {
                pasaFiltroCategoria = false;
            }
        }

        // 3) Filtro por stock
        // Si el checkbox no está marcado → no filtramos por stock.
        // Si está marcado, solo aceptamos productos con stock = true.
        let pasaFiltroStock = true;

        if (soloStock) {
            if (!prod.stock) {
                pasaFiltroStock = false;
            }
        }

        // Incluir el producto solo si pasa los tres filtros
        if (pasaFiltroNombre && pasaFiltroCategoria && pasaFiltroStock) {
            filtrados.push(prod);
        }
    }

    return filtrados;
}

// 6. Función principal que actualiza la vista según los filtros
function actualizarVista() {
    const listaFiltrada = obtenerProductosFiltrados();
    renderizarProductos(listaFiltrada);
}

// 7. Eventos para los filtros
buscadorNombre.addEventListener("input", function() {
    actualizarVista();
});

selectCategoria.addEventListener("change", function() {
    actualizarVista();
});

checkSoloStock.addEventListener("change", function() {
    actualizarVista();
});

// 8. Mostrar catálogo inicial al cargar la página
actualizarVista();