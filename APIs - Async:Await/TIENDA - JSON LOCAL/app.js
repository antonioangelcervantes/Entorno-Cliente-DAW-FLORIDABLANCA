"use strict";

// =====================================
// Estado (en memoria)
// =====================================
let productos = []; // productos cargados del JSON
let textoBusqueda = "";

// =====================================
// 1) Cargar datos (fetch + async/await)
// =====================================
async function cargarProductos() {
  // TODO:
  // 1) Haz fetch del archivo local
  //    PISTA: "./data/productos.json"
  // 2) Convierte la respuesta a JSON
  // 3) Devuelve el array de productos (data.productos)
}

// =====================================
// 2) Filtrar productos (filter)
// =====================================
function filtrarProductos(lista, texto) {
  // TODO:
  // - Si texto está vacío -> devuelve la lista completa
  // - Si no:
  //   devuelve solo los productos cuyo nombre incluya el texto
  //
  // PISTA CLAVE:
  // nombre.toLowerCase().includes(texto.toLowerCase())
}

// =====================================
// 3) Calcular total (reduce)
// =====================================
function calcularTotal(listaFiltrada) {
  // TODO:
  // - Usa reduce para sumar los precios
  // - El acumulador debe empezar en 0
}

// =====================================
// 4) Pintar en pantalla
// =====================================
function pintar(listaFiltrada, total) {
  const contLista = document.querySelector("#lista");
  const contTotal = document.querySelector("#total");

  // TODO:
  // - Construir el HTML de los productos
  // - Ejemplo de estructura:
  //
  // <div class="item">
  //   <span class="name">Nombre</span>
  //   <span class="price">Precio €</span>
  // </div>
  //
  // - Pintar el total con 2 decimales
  //   PISTA: total.toFixed(2)
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
  const input = document.querySelector("#busqueda");

  input.addEventListener("input", function (e) {
    textoBusqueda = e.target.value;

    // TODO:
    // 1) Filtrar productos usando filtrarProductos(productos, textoBusqueda)
    // 2) Calcular total con calcularTotal(listaFiltrada)
    // 3) Llamar a pintar(listaFiltrada, total)
  });
}

// =====================================
// Inicio del programa (ARRANQUE LINEAL)
// =====================================

// 1) Cargar productos desde el JSON local
cargarProductos().then(function (lista) {
  // Guardamos los productos en memoria
  productos = lista;

  // 2) Estado inicial (sin filtro)
  const listaFiltrada = filtrarProductos(productos, "");
  const total = calcularTotal(listaFiltrada);

  // 3) Pintado inicial
  pintar(listaFiltrada, total);

  // 4) Activar eventos
  configurarEventos();
});
