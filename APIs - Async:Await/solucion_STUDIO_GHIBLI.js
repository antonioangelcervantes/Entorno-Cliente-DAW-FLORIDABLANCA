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

const peliculasCargadas = [];
const peliculasFiltradas = [];

const API_URL = "https://ghibliapi.vercel.app/films";

// ========================================
// FUNCIÓN ASÍNCRONA - CONSUMIR API REAL
// ========================================

// Carga las películas desde la API real de Studio Ghibli
async function cargarPeliculasAPI() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error en la API: ${response.status}`);
    }
    const peliculas = await response.json();
    return peliculas;
  } catch (error) {
    console.error("Error al cargar películas:", error);
    throw error;
  }
}

// ========================================
// FUNCIONES CON MÉTODOS DE ARRAYS
// ========================================

// Extrae solo los títulos de las películas usando map()
function obtenerTitulos(peliculas) {
  return peliculas.map((pelicula) => pelicula.title);
}

// Filtra películas por director usando filter()
function filtrarPorDirector(peliculas, director) {
  return peliculas.filter((pelicula) => pelicula.director === director);
}

// Busca películas por título (búsqueda parcial, no sensible a mayúsculas)
function buscarPorTitulo(peliculas, termino) {
  return peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(termino.toLowerCase()),
  );
}

// Calcula el promedio de puntuaciones RT Score usando reduce()
function calcularPuntuacionPromedio(peliculas) {
  if (peliculas.length === 0) {
    return 0;
  }
  const sumaScores = peliculas.reduce((suma, pelicula) => {
    return suma + parseFloat(pelicula.rt_score);
  }, 0);
  return sumaScores / peliculas.length;
}

// Busca una película específica por su ID usando find()
function buscarPorId(peliculas, id) {
  return peliculas.find((pelicula) => pelicula.id === id);
}

// Verifica si existe alguna película del director indicado usando some()
function tieneDirector(peliculas, director) {
  return peliculas.some((pelicula) => pelicula.director === director);
}

// Ordena películas por año (más recientes primero) usando sort()
function ordenarPorAño(peliculas) {
  return [...peliculas].sort((a, b) => {
    return parseInt(b.release_date) - parseInt(a.release_date);
  });
}

// Ordena películas por puntuación RT (mayor a menor) usando sort()
function ordenarPorPuntuacion(peliculas) {
  return [...peliculas].sort((a, b) => {
    return parseFloat(b.rt_score) - parseFloat(a.rt_score);
  });
}

// ========================================
// FUNCIONES DE INTERFAZ Y DOM
// ========================================

// Inicializa la aplicación y configura los event listeners
function inicializarApp() {
  console.log("🎬 Aplicación Studio Ghibli iniciada - SOLUCIÓN");
  console.log("API URL:", API_URL);

  // Configurar event listeners
  document
    .getElementById("btnCargar")
    .addEventListener("click", manejarCargaDatos);
  document
    .getElementById("selectDirector")
    .addEventListener("change", manejarFiltroDirector);
  document
    .getElementById("inputBuscar")
    .addEventListener("input", manejarBusqueda);
  document
    .getElementById("btnOrdenarAño")
    .addEventListener("click", manejarOrdenarAño);
  document
    .getElementById("btnOrdenarPuntuacion")
    .addEventListener("click", manejarOrdenarPuntuacion);
  document.getElementById("btnReset").addEventListener("click", manejarReset);
}

// Maneja la carga de películas desde la API real
async function manejarCargaDatos() {
  try {
    mostrarEstadoCarga("Cargando películas...", "cargando");
    const peliculas = await cargarPeliculasAPI();
    peliculasCargadas.push(...peliculas);
    peliculasFiltradas.push(...peliculas);
    mostrarPeliculas(peliculasFiltradas);
    actualizarEstadisticas(peliculasFiltradas);
    mostrarEstadoCarga("✅ Películas cargadas correctamente", "exito");
  } catch (error) {
    mostrarEstadoCarga("❌ Error al cargar las películas", "error");
    console.error(error);
  }
}

// Maneja el filtro por director
function manejarFiltroDirector() {
  const director = document.getElementById("selectDirector").value;
  if (director === "") {
    peliculasFiltradas.splice(
      0,
      peliculasFiltradas.length,
      ...peliculasCargadas,
    );
  } else {
    const filtradas = filtrarPorDirector(peliculasCargadas, director);
    peliculasFiltradas.splice(0, peliculasFiltradas.length, ...filtradas);
  }
  mostrarPeliculas(peliculasFiltradas);
  actualizarEstadisticas(peliculasFiltradas);
}

// Maneja la búsqueda por título en tiempo real
function manejarBusqueda() {
  const termino = document.getElementById("inputBuscar").value;
  if (termino === "") {
    peliculasFiltradas.splice(
      0,
      peliculasFiltradas.length,
      ...peliculasCargadas,
    );
  } else {
    const buscadas = buscarPorTitulo(peliculasCargadas, termino);
    peliculasFiltradas.splice(0, peliculasFiltradas.length, ...buscadas);
  }
  mostrarPeliculas(peliculasFiltradas);
  actualizarEstadisticas(peliculasFiltradas);
}

// Ordena las películas mostradas por año
function manejarOrdenarAño() {
  const ordenadas = ordenarPorAño(peliculasFiltradas);
  peliculasFiltradas.splice(0, peliculasFiltradas.length, ...ordenadas);
  mostrarPeliculas(peliculasFiltradas);
}

// Ordena las películas mostradas por puntuación RT
function manejarOrdenarPuntuacion() {
  const ordenadas = ordenarPorPuntuacion(peliculasFiltradas);
  peliculasFiltradas.splice(0, peliculasFiltradas.length, ...ordenadas);
  mostrarPeliculas(peliculasFiltradas);
}

// Resetea todos los filtros y ordenamientos
function manejarReset() {
  document.getElementById("selectDirector").value = "";
  document.getElementById("inputBuscar").value = "";
  peliculasFiltradas.splice(0, peliculasFiltradas.length, ...peliculasCargadas);
  mostrarPeliculas(peliculasFiltradas);
  actualizarEstadisticas(peliculasFiltradas);
}

// Renderiza las películas en el DOM usando forEach()
function mostrarPeliculas(peliculas) {
  const contenedor = document.getElementById("listaPeliculas");
  contenedor.innerHTML = "";

  if (peliculas.length === 0) {
    contenedor.innerHTML =
      '<p class="text-center text-gray-400 col-span-full py-8">No se encontraron películas</p>';
    return;
  }

  peliculas.forEach((pelicula) => {
    const tarjeta = crearTarjetaPelicula(pelicula);
    contenedor.innerHTML += tarjeta;
  });

  document.getElementById("contadorPeliculas").textContent = peliculas.length;
}

// Crea el HTML de una tarjeta de película con datos reales de la API
function crearTarjetaPelicula(pelicula) {
  return `
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300">
      <img src="${pelicula.image}" alt="${pelicula.title}" class="w-full h-80 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-bold text-white mb-2 line-clamp-1">${pelicula.title}</h3>
        <p class="text-gray-300 text-sm mb-1">🎬 ${pelicula.director}</p>
        <p class="text-gray-300 text-sm mb-1">📅 ${pelicula.release_date}</p>
        <p class="text-gray-300 text-sm mb-2">⏱️ ${pelicula.running_time} min</p>
        <div class="flex justify-between items-center mt-3 mb-3">
          <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ ${pelicula.rt_score}/100
          </span>
        </div>
        <p class="text-gray-400 text-xs line-clamp-3">${pelicula.description}</p>
      </div>
    </div>
  `;
}

// Actualiza el panel de estadísticas
function actualizarEstadisticas(peliculas) {
  document.getElementById("statTotal").textContent = peliculas.length;
  const promedio = calcularPuntuacionPromedio(peliculas);
  document.getElementById("statPromedio").textContent = promedio.toFixed(1);
}

// Muestra mensajes de estado de carga
function mostrarEstadoCarga(mensaje, tipo) {
  const elemento = document.getElementById("estadoCarga");
  elemento.textContent = mensaje;
  elemento.className = "p-4 rounded-lg text-center font-semibold mb-6";

  if (tipo === "cargando") {
    elemento.className += " bg-yellow-100 text-yellow-800";
  } else if (tipo === "exito") {
    elemento.className += " bg-green-100 text-green-800";
  } else if (tipo === "error") {
    elemento.className += " bg-red-100 text-red-800";
  }

  elemento.classList.remove("hidden");
}

// ========================================
// INICIAR APLICACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", inicializarApp);
