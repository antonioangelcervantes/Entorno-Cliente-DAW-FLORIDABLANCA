// =============================================================
// 🎬 PROYECTO: BUSCADOR DE PELÍCULAS CON FAVORITOS
// =============================================================
//
// INSTRUCCIONES:
// 1. Implementa las funciones vacías que se encuentran abajo
// 2. Usa la API de OMDb (http://www.omdbapi.com/)
// 3. Usa LocalStorage para guardar las películas favoritas
// 4. El usuario debe poder: 
//    - Buscar películas por nombre
//    - Ver detalles:  título, año, póster, sinopsis, rating
//    - Agregar películas a favoritos (guardar en LocalStorage)
//    - Ver lista de favoritos
//    - Eliminar de favoritos
// 5. Los favoritos deben persistir al recargar la página
//
// API KEY:  Necesitas obtener una gratis en http://www.omdbapi.com/apikey.aspx
// URL base: http://www.omdbapi.com/? apikey=TU_API_KEY&s=
// =============================================================

// 🔑 CONFIGURACIÓN DE LA API
const API_KEY = 'TU_API_KEY_AQUI'; // TODO: Reemplazar con tu API key
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// 📦 REFERENCIAS DEL DOM
const inputPelicula = document.getElementById('inputPelicula');
const btnBuscar = document.getElementById('btnBuscar');
const resultadosDiv = document.getElementById('resultados');
const favoritosDiv = document.getElementById('favoritos');

// 💾 ARRAY PARA ALMACENAR FAVORITOS (cargado desde LocalStorage)
let peliculasFavoritas = [];

// =============================================================
// 🚀 FUNCIONES PRINCIPALES
// =============================================================

// 1️⃣ Inicializar la aplicación
function init() {
    // TODO: 
    // - Cargar favoritos desde LocalStorage
    // - Mostrar favoritos en la UI
    // - Agregar event listeners
}

// 2️⃣ Buscar películas en la API
async function buscarPeliculas(titulo) {
    // TODO: 
    // - Validar que el input no esté vacío
    // - Hacer fetch a la API (búsqueda:  &s=titulo)
    // - Manejar la respuesta
    // - Llamar a mostrarResultados()
    // - Manejar errores
}

// 3️⃣ Mostrar resultados de búsqueda
function mostrarResultados(peliculas) {
    // TODO:
    // - Limpiar resultados anteriores
    // - Iterar sobre el array de películas
    // - Crear una tarjeta (card) para cada película
    // - Agregar botón "Agregar a Favoritos"
    // - Verificar si ya está en favoritos (deshabilitar botón)
}

// 4️⃣ Obtener detalles completos de una película
async function obtenerDetalles(imdbID) {
    // TODO:
    // - Hacer fetch con &i=imdbID para obtener detalles completos
    // - Retornar los datos
    // NOTA: Esto es opcional, pero mejora la info que guardas
}

// =============================================================
// ⭐ FUNCIONES DE FAVORITOS (LocalStorage)
// =============================================================

// 5️⃣ Cargar favoritos desde LocalStorage
function cargarFavoritos() {
    // TODO:
    // - Obtener datos de localStorage. getItem('favoritos')
    // - Parsear JSON (usar JSON.parse)
    // - Si no existe, devolver array vacío []
    // - Asignar a peliculasFavoritas
}

// 6️⃣ Guardar favoritos en LocalStorage
function guardarFavoritos() {
    // TODO:
    // - Convertir peliculasFavoritas a JSON (JSON.stringify)
    // - Guardar en localStorage. setItem('favoritos', json)
}

// 7️⃣ Agregar película a favoritos
function agregarAFavoritos(pelicula) {
    // TODO:
    // - Verificar que no esté ya en favoritos (usar find o some)
    // - Agregar al array peliculasFavoritas
    // - Guardar en LocalStorage
    // - Actualizar la UI
    // - Mostrar feedback visual (opcional)
}

// 8️⃣ Eliminar película de favoritos
function eliminarDeFavoritos(imdbID) {
    // TODO:
    // - Filtrar el array para remover la película (filter)
    // - Guardar cambios en LocalStorage
    // - Actualizar la UI
}

// 9️⃣ Mostrar lista de favoritos
function mostrarFavoritos() {
    // TODO:
    // - Limpiar el div de favoritos
    // - Si no hay favoritos, mostrar mensaje
    // - Iterar sobre peliculasFavoritas
    // - Crear mini-cards con:  póster, título, botón eliminar
}

// =============================================================
// 🎨 FUNCIONES AUXILIARES
// =============================================================

// 🔟 Mostrar mensaje de error
function mostrarError(mensaje) {
    // TODO: Mostrar error en el div de resultados
}

// 1️⃣1️⃣ Limpiar resultados
function limpiarResultados() {
    // TODO: Vaciar el contenido de resultadosDiv
}

// =============================================================
// 🎯 EVENT LISTENERS
// =============================================================

// TODO: Agregar listeners
// - Click en botón buscar
// - Enter en input
// - Llamar a init() cuando cargue la página

// =============================================================
// 📚 RECURSOS Y TIPS
// =============================================================

/*
ESTRUCTURA DE RESPUESTA DE LA API (búsqueda):
{
  "Search": [
    {
      "Title":  "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "Response": "True"
}

ESTRUCTURA DE DATOS PARA LocalStorage:
[
  {
    "Title":  "The Matrix",
    "Year": "1999",
    "imdbID": "tt0133093",
    "Poster": "https://...",
    "Plot": "..." // Si obtienes detalles completos
  }
]

MÉTODOS DE LocalStorage:
- localStorage.setItem('clave', valor)
- localStorage.getItem('clave')
- localStorage.removeItem('clave')
- localStorage.clear()

⚠️ IMPORTANTE: LocalStorage solo guarda strings, usa JSON.stringify() y JSON.parse()

EJEMPLO DE TARJETA CON TAILWIND:
<div class="bg-gray-50 rounded-lg p-4 flex gap-4">
  <img src="${poster}" class="w-20 h-28 object-cover rounded">
  <div class="flex-1">
    <h3 class="font-bold">${title}</h3>
    <p class="text-sm text-gray-600">${year}</p>
    <button class="mt-2 bg-red-500 text-white px-3 py-1 rounded">
      ❌ Eliminar
    </button>
  </div>
</div>
*/

// =============================================================
// ✅ INICIAR APP
// =============================================================

// TODO: Descomentar cuando implementes init()
// init();