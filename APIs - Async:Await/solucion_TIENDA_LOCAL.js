"use strict";

// =====================================
// Estado (en memoria)
// =====================================
let productos = []; // productos cargados del JSON
let textoBusqueda = "";

// =====================================
// 1) Cargar datos (fetch + async/await + errores)
// =====================================
async function cargarProductos() {
  try {
    const respuesta = await fetch("./data/productos.json");

    // Comprobación básica de error (vida real)
    if (!respuesta.ok) {
      throw new Error("No se ha podido cargar el archivo de productos");
    }

    const data = await respuesta.json();

    /*
      COMENTARIO PEDAGÓGICO IMPORTANTE

      - `data` es el objeto completo que viene del JSON
      - Normalmente el JSON NO es un array directamente
      - En este caso tiene esta estructura:

        {
          "productos": [ ... ]
        }

      - Por eso NO usamos `data` ni `data[0]`
      - Usamos `data.productos`, que es el array real
        con el que vamos a trabajar en la aplicación
    */

    productos = data.productos;
    return productos;
  } catch (error) {
    console.error("Error al cargar productos:", error);

    // Si hay error, trabajamos con un array vacío
    productos = [];
    return [];
  }
}

// =====================================
// 2) Filtrar productos (filter)
// =====================================
function filtrarProductos(lista, texto) {
  if (texto === "") {
    return lista;
  }

  return lista.filter(function (producto) {
    const nombre = producto.nombre.toLowerCase();
    const textoBuscado = texto.toLowerCase();

    return nombre.includes(textoBuscado);
  });
}

// =====================================
// 3) Calcular total (reduce)
// =====================================
function calcularTotal(listaFiltrada) {
  return listaFiltrada.reduce(function (acumulador, producto) {
    return acumulador + producto.precio;
  }, 0);
}

// =====================================
// 4) Pintar en pantalla
// =====================================
function pintar(listaFiltrada, total) {
  const contLista = document.querySelector("#lista");
  const contTotal = document.querySelector("#total");

  let html = "";

  listaFiltrada.forEach(function (producto) {
    html += `
      <div class="item">
        <span class="name">${producto.nombre}</span>
        <span class="price">${producto.precio} €</span>
      </div>
    `;
  });

  contLista.innerHTML = html;
  contTotal.textContent = total.toFixed(2) + " €";
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
  const input = document.querySelector("#busqueda");

  input.addEventListener("input", function (e) {
    textoBusqueda = e.target.value;

    const listaFiltrada = filtrarProductos(productos, textoBusqueda);
    const total = calcularTotal(listaFiltrada);

    pintar(listaFiltrada, total);
  });
}

// =====================================
// Inicio del programa (ARRANQUE LINEAL)
// =====================================

// 1) Cargar productos desde el JSON local
cargarProductos().then(function () {
  // 2) Estado inicial (sin filtro)
  const listaFiltrada = filtrarProductos(productos, "");
  const total = calcularTotal(listaFiltrada);

  // 3) Pintado inicial
  pintar(listaFiltrada, total);

  // 4) Activar eventos
  configurarEventos();
});
