// =============================================================
// 🎬 CATÁLOGO STUDIO GHIBLI - PRÁCTICA ARRAYS Y ASYNC/AWAIT
// =============================================================
// Práctica para 2º DAW - Entorno Cliente
// API REAL: Studio Ghibli API (sin API Key)
// URL: https://ghibliapi.vercel.app/films
// =============================================================

// ========================================
// VARIABLES GLOBALES
// ========================================

let peliculasCargadas = [];
let peliculasFiltradas = [];

const API_URL = 'https://ghibliapi.vercel.app/films';

// ========================================
// FUNCIÓN ASÍNCRONA - CONSUMIR API REAL
// ========================================

// Carga las películas desde la API real de Studio Ghibli
async function cargarPeliculasAPI() {
  // TODO: Implementar función asíncrona con fetch()
  // 1. Hacer petición con fetch() a API_URL
  // 2. Verificar que response.ok sea true (si no, lanzar error)
  // 3. Convertir respuesta a JSON con response.json()
  // 4. Retornar el array de películas
  // 5. Manejar errores con try/catch
}

// ========================================
// FUNCIONES CON MÉTODOS DE ARRAYS
// ========================================

// Extrae solo los títulos de las películas usando map()
function obtenerTitulos(peliculas) {
  // TODO: Usar map() para extraer la propiedad 'title'
}

// Filtra películas por director usando filter()
function filtrarPorDirector(peliculas, director) {
  // TODO: Usar filter() para obtener películas del director indicado
}

// Busca películas por título (búsqueda parcial, no sensible a mayúsculas)
function buscarPorTitulo(peliculas, termino) {
  // TODO: Usar filter() con includes() y toLowerCase()
}

// Calcula el promedio de puntuaciones RT Score usando reduce()
function calcularPuntuacionPromedio(peliculas) {
  // TODO: Calcular promedio de rt_score
  // 1. Verificar que el array no esté vacío (retornar 0 si lo está)
  // 2. Usar reduce() para sumar todos los rt_score
  // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
  // 4. Dividir la suma entre la cantidad de películas
  // 5. Retornar el promedio
}

// Busca una película específica por su ID usando find()
function buscarPorId(peliculas, id) {
  // TODO: Usar find() para buscar por id
}

// Verifica si existe alguna película del director indicado usando some()
function tieneDirector(peliculas, director) {
  // TODO: Usar some() para verificar si existe al menos una película del director
}

// Ordena películas por año (más recientes primero) usando sort()
function ordenarPorAño(peliculas) {
  // TODO: Ordenar por release_date descendente
  // 1. Usar spread operator [...peliculas] para no modificar el original
  // 2. Usar sort() con función comparadora
  // 3. IMPORTANTE: release_date es string, convertir con parseInt()
  // 4. Ordenar de mayor a menor (más reciente primero)
}

// Ordena películas por puntuación RT (mayor a menor) usando sort()
function ordenarPorPuntuacion(peliculas) {
  // TODO: Ordenar por rt_score descendente
  // 1. Usar spread operator [...peliculas] para no modificar el original
  // 2. Usar sort() con función comparadora
  // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
  // 4. Ordenar de mayor a menor
}

// ========================================
// FUNCIONES DE INTERFAZ Y DOM
// ========================================

// Inicializa la aplicación y configura los event listeners
function inicializarApp() {
  console.log('🎬 Aplicación Studio Ghibli iniciada');
  
  // TODO: Configurar event listeners para todos los botones e inputs
  // - btnCargar -> manejarCargaDatos
  // - selectDirector -> manejarFiltroDirector
  // - inputBuscar -> manejarBusqueda
  // - btnOrdenarAño -> manejarOrdenarAño
  // - btnOrdenarPuntuacion -> manejarOrdenarPuntuacion
  // - btnReset -> manejarReset
}

// Maneja la carga de películas desde la API real
async function manejarCargaDatos() {
  // TODO: Cargar películas de forma asíncrona
  // 1. Mostrar mensaje "Cargando..." con mostrarEstadoCarga()
  // 2. Llamar a cargarPeliculasAPI() con await
  // 3. Guardar resultado en peliculasCargadas y peliculasFiltradas
  // 4. Llamar a mostrarPeliculas() y actualizarEstadisticas()
  // 5. Mostrar mensaje de éxito
  // 6. Manejar errores con try/catch y mostrar mensaje de error
}

// Maneja el filtro por director
function manejarFiltroDirector() {
  // TODO: Filtrar películas por director seleccionado
  // 1. Obtener valor del select con id 'selectDirector'
  // 2. Si está vacío, mostrar todas las películas
  // 3. Si no, usar filtrarPorDirector()
  // 4. Actualizar peliculasFiltradas
  // 5. Llamar a mostrarPeliculas() y actualizarEstadisticas()
}

// Maneja la búsqueda por título en tiempo real
function manejarBusqueda() {
  // TODO: Buscar películas por título
  // 1. Obtener valor del input con id 'inputBuscar'
  // 2. Si está vacío, mostrar todas las películas
  // 3. Si no, usar buscarPorTitulo()
  // 4. Actualizar peliculasFiltradas
  // 5. Llamar a mostrarPeliculas() y actualizarEstadisticas()
}

// Ordena las películas mostradas por año
function manejarOrdenarAño() {
  // TODO: Ordenar peliculasFiltradas por año y mostrar resultado
}

// Ordena las películas mostradas por puntuación RT
function manejarOrdenarPuntuacion() {
  // TODO: Ordenar peliculasFiltradas por puntuación y mostrar resultado
}

// Resetea todos los filtros y ordenamientos
function manejarReset() {
  // TODO: Resetear filtros
  // 1. Limpiar valor de selectDirector
  // 2. Limpiar valor de inputBuscar
  // 3. Restaurar peliculasFiltradas = peliculasCargadas
  // 4. Llamar a mostrarPeliculas() y actualizarEstadisticas()
}

// Renderiza las películas en el DOM usando forEach()
function mostrarPeliculas(peliculas) {
  // TODO: Renderizar películas en el contenedor
  // 1. Obtener elemento con id 'listaPeliculas'
  // 2. Limpiar su contenido (innerHTML = '')
  // 3. Si no hay películas, mostrar mensaje "No se encontraron películas"
  // 4. Si hay películas, usar forEach() para crear cada tarjeta
  // 5. Dentro del forEach, llamar a crearTarjetaPelicula() y añadir al contenedor
  // 6. Actualizar el contador de películas (elemento con id 'contadorPeliculas')
}

// Crea el HTML de una tarjeta de película con datos reales de la API
function crearTarjetaPelicula(pelicula) {
  // TODO: Crear y retornar HTML usando template literals
  // Propiedades disponibles: 
  // - pelicula.title (título)
  // - pelicula.director (director)
  // - pelicula.release_date (año)
  // - pelicula.rt_score (puntuación)
  // - pelicula.running_time (duración en minutos)
  // - pelicula.image (URL del póster)
  // - pelicula.description (sinopsis)
}

// Actualiza el panel de estadísticas
function actualizarEstadisticas(peliculas) {
  // TODO: Actualizar estadísticas en el DOM
  // 1. Actualizar 'statTotal' con peliculas.length
  // 2. Calcular promedio con calcularPuntuacionPromedio()
  // 3. Actualizar 'statPromedio' con el promedio (usar .toFixed(1))
}

// Muestra mensajes de estado de carga
function mostrarEstadoCarga(mensaje, tipo) {
  // TODO: Mostrar mensajes de estado
  // 1. Obtener elemento con id 'estadoCarga'
  // 2. Establecer el texto con el mensaje
  // 3. Limpiar las clases y añadir clases base
  // 4. Según el tipo ('cargando', 'exito', 'error'), añadir clases de color:
  //    - cargando: bg-yellow-100 text-yellow-800
  //    - exito: bg-green-100 text-green-800
  //    - error: bg-red-100 text-red-800
  // 5. Quitar la clase 'hidden' para mostrar el mensaje
}

// ========================================
// INICIAR APLICACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', inicializarApp);