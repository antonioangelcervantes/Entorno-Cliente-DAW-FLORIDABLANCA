// =============================================================
// 🌍 PROYECTO: BUSCADOR DE PAÍSES CON API REST
// =============================================================
//
// INSTRUCCIONES:
// 1. Implementa las funciones vacías que se encuentran abajo
// 2. Usa la API de REST Countries (https://restcountries.com/)
// 3. Agrega todas las clases de Tailwind al HTML para que sea responsive
// 4. El usuario debe poder buscar por nombre de país y ver:
//    - Nombre del país
//    - Capital
//    - Población
//    - Idiomas
//    - Bandera
//    - Región
// 5. Maneja errores cuando el país no existe
// 6. Haz que el formulario sea funcional (Enter o Click en botón)
//
// URL base de la API: https://restcountries.com/v3.1/name/
// =============================================================

// 1. Obtén referencias del DOM
const inputPais = document.getElementById("inputPais");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// 2. Función para hacer la búsqueda (llamar a la API)
async function buscarPais() {
  // TODO: Implementar la búsqueda
  // - Obtener el valor del input
  // - Validar que no esté vacío
  // - Llamar a la API
  // - Mostrar los resultados
  // - Manejar errores
}

// 3. Función para mostrar los datos del país
function mostrarPais(data) {
  // TODO: Mostrar la información del país en el HTML
  // - Puedes destructurar los datos que necesites
  // - Crea un HTML con la información
  // - Usa métodos de array si la API devuelve un array
}

// 4. Función para manejar errores
function mostrarError(mensaje) {
  // TODO: Mostrar un mensaje de error en el div #resultado
}

// 5. Agregar event listeners
// TODO:
// - Botón "Buscar" (click)
// - Input de país (Enter)
// - Opcionalmente: limpiar resultados anteriores

// 6. RECURSOS ÚTILES:
// - Fetch API: fetch(url)
// - JSON: response.json()
// - Template literals para HTML: `<div>${variable}</div>`
// - Array methods: find(), map(), etc.
// - Destructuring: const { name, capital } = data
