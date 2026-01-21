/*
  EJERCICIO: Usuarios favoritos (API + LocalStorage)

  OBJETIVO:
  - Cargar usuarios desde la API
  - Pintarlos en pantalla
  - Permitir marcar/desmarcar favoritos
  - Guardar favoritos (ids) en LocalStorage
  - Recuperarlos al recargar

  API:
  https://jsonplaceholder.typicode.com/users

  LocalStorage:
  clave: "favoritos"
  valor: JSON de array de ids -> [1, 3, 7]
*/

const API_URL = "https://jsonplaceholder.typicode.com/users";
const LS_KEY = "favoritos";

// Elementos del DOM
const btnCargar = document.getElementById("btnCargar");
const btnLimpiar = document.getElementById("btnLimpiar");
const estado = document.getElementById("estado");
const listaUsuarios = document.getElementById("listaUsuarios");
const listaFavoritos = document.getElementById("listaFavoritos");

// Variables de estado en memoria
const usuariosCache = []; // aquí guardaremos los usuarios descargados (para no pedirlos todo el rato)

/* =========================
   LocalStorage (favoritos)
   ========================= */

function obtenerFavoritos() {
  // TODO 1:
  // - Lee localStorage con la clave LS_KEY
  // - Si no existe nada, devuelve un array vacío []
  // - Si existe, convierte de JSON a array y devuélvelo
  return [];
}

function guardarFavoritos(favoritos) {
  // TODO 2:
  // - Guarda el array "favoritos" en localStorage como JSON (string)
}

function esFavorito(id) {
  // TODO 3:
  // - Devuelve true/false según si el id está en el array de favoritos
  return false;
}

function alternarFavorito(id) {
  // TODO 4:
  // - Si el id ya está en favoritos -> eliminarlo
  // - Si no está -> añadirlo
  // - Guardar en localStorage
  // - Actualizar interfaz (pintar listas)
}

/* =========================
   Pintado en pantalla (DOM)
   ========================= */

function crearItemUsuario(usuario, favorito) {
  // Crea un <li> con nombre, email y botón de favorito
  const li = document.createElement("li");
  li.className = "item";

  const info = document.createElement("div");

  const nombre = document.createElement("strong");
  nombre.textContent = usuario.name;

  const email = document.createElement("small");
  email.textContent = usuario.email;

  info.appendChild(nombre);
  info.appendChild(email);

  const acciones = document.createElement("div");

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = favorito ? "Favorito" : "Normal";

  const btnFav = document.createElement("button");
  btnFav.className = "btn-fav";
  btnFav.type = "button";
  btnFav.textContent = favorito ? "Quitar" : "Favorito";

  if (favorito) {
    btnFav.classList.add("is-fav");
  }

  // Importante: guardamos el id en un atributo data- (sin usar dataset avanzado)
  btnFav.setAttribute("data-id", String(usuario.id));
  btnFav.setAttribute("data-accion", "toggle-fav");

  acciones.appendChild(tag);
  acciones.appendChild(btnFav);

  li.appendChild(info);
  li.appendChild(acciones);

  return li;
}

function pintarUsuarios(usuarios) {
  // TODO 5:
  // - Vaciar listaUsuarios
  // - Para cada usuario:
  //   - comprobar si es favorito
  //   - crear el li con crearItemUsuario(...)
  //   - añadirlo a listaUsuarios
}

function pintarFavoritos(usuarios) {
  // TODO 6:
  // - Vaciar listaFavoritos
  // - Pintar SOLO los usuarios que estén en favoritos
  // - Si no hay favoritos, mostrar un <li> con un mensaje tipo "No hay favoritos"
}

/* =========================
   Consumo de API (async/await)
   ========================= */

async function cargarUsuarios() {
  // TODO 7:
  // - Mostrar estado "Cargando..."
  // - Deshabilitar btnCargar mientras carga
  // - Hacer fetch con await
  // - Comprobar response.ok (si no, throw Error)
  // - Convertir a JSON con await response.json()
  // - Guardar en usuariosCache
  // - Pintar usuarios y favoritos
  // - Actualizar estado "Usuarios cargados: X"
  // - En caso de error: mostrar estado de error y console.error
}

/* =========================
   Eventos
   ========================= */

// Botones principales
btnCargar.addEventListener("click", function () {
  cargarUsuarios();
});

btnLimpiar.addEventListener("click", function () {
  // TODO 8:
  // - Vaciar favoritos en localStorage
  // - Repintar (si ya hay usuarios en pantalla)
});

// Delegación de eventos para botones de favorito
listaUsuarios.addEventListener("click", function (event) {
  // Queremos detectar clicks en botones con data-accion="toggle-fav"
  // TODO 9:
  // - Llama a alternarFavorito(id)
});

// Al cargar la página:
// - No es obligatorio cargar automáticamente desde la API,
//   pero sí debemos poder recuperar favoritos cuando haya datos.
window.addEventListener("DOMContentLoaded", function () {
  // TODO 10 (opcional, recomendado):
  // - Si quieres, puedes cargar usuarios automáticamente aquí.
  // - O dejarlo para que sea manual con el botón.
});
