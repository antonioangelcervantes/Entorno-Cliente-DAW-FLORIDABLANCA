# 🎬 Práctica: Catálogo de Películas Studio Ghibli

## 🎯 Objetivos de Aprendizaje

Esta práctica se centra en:

- ✅ **Promesas y Async/Await**: Consumir una API REST real
- ✅ **Fetch API**: Realizar peticiones HTTP
- ✅ **Métodos de Arrays**: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `sort`
- ✅ **Manipulación del DOM**: Renderizar datos dinámicamente
- ✅ **Manejo de errores**: `try/catch` en operaciones asíncronas

**API REAL**: Studio Ghibli API (sin necesidad de API Key)

---

## 📋 Descripción del Proyecto

Vas a crear un catálogo interactivo de películas del Studio Ghibli que:

1. Carga películas desde una **API REST real**
2. Muestra las películas con pósters reales
3. Permite filtrar por director y buscar por título
4. Calcula estadísticas usando `reduce()`
5. Ordena las películas por año o puntuación

---

## 🌐 API a Utilizar

**Studio Ghibli API**
- **URL**: `https://ghibliapi.vercel.app/films`
- **Sin API Key** requerida
- **Documentación**: https://ghibliapi.vercel.app

### Propiedades importantes de cada película:

- `title`: Título de la película
- `director`: Director
- `release_date`: Año de estreno (viene como string)
- `rt_score`: Puntuación de Rotten Tomatoes 0-100 (viene como string)
- `running_time`: Duración en minutos (string)
- `image`: URL del póster
- `description`: Sinopsis

**⚠️ IMPORTANTE**: `rt_score` y `release_date` vienen como strings, debes convertirlos a número.

---

## 📊 Funciones a Implementar

### 1. Función Asíncrona (consumir API):

```javascript
async function cargarPeliculasAPI()
```
- Usa `fetch()` para llamar a la API
- Usa `async/await`
- Maneja errores con `try/catch`

---

### 2. Funciones con Métodos de Arrays:

#### Con `map()`:
```javascript
function obtenerTitulos(peliculas)
```

#### Con `filter()`:
```javascript
function filtrarPorDirector(peliculas, director)
function buscarPorTitulo(peliculas, termino)
```

#### Con `reduce()`:
```javascript
function calcularPuntuacionPromedio(peliculas)
```

#### Con `find()`:
```javascript
function buscarPorId(peliculas, id)
```

#### Con `some()`:
```javascript
function tieneDirector(peliculas, director)
```

#### Con `sort()`:
```javascript
function ordenarPorAño(peliculas)
function ordenarPorPuntuacion(peliculas)
```

---

### 3. Funciones de Interfaz:

```javascript
function inicializarApp()
async function manejarCargaDatos()
function manejarFiltroDirector()
function manejarBusqueda()
function manejarOrdenarAño()
function manejarOrdenarPuntuacion()
function manejarReset()
function mostrarPeliculas(peliculas)
function crearTarjetaPelicula(pelicula)
function actualizarEstadisticas(peliculas)
function mostrarEstadoCarga(mensaje, tipo)
```

---

## 🚀 Pasos Sugeridos

### **Fase 1: Consumir API Real (15 min)**
1. Implementa `cargarPeliculasAPI()` con `fetch()`
2. Prueba en consola que llegan los datos
3. Implementa manejo de errores

### **Fase 2: Funciones de Arrays (25 min)**
1. Implementa las 8 funciones de procesamiento
2. Recuerda convertir `rt_score` y `release_date` de string a número
3. Prueba cada función en la consola

### **Fase 3: Interfaz (25 min)**
1. Implementa `mostrarPeliculas()` con `forEach()`
2. Conecta los botones y filtros con event listeners
3. Muestra las imágenes reales de las películas

---

## 🎯 Criterios de Evaluación

| Concepto | Puntos |
|----------|--------|
| **Fetch + Async/Await** (consumir API real) | 25% |
| **map()** (1 función) | 10% |
| **filter()** (2 funciones) | 20% |
| **reduce()** (1 función) | 15% |
| **find() y some()** (2 funciones) | 10% |
| **sort()** (2 funciones) | 10% |
| **forEach() + DOM** | 10% |

---

## 💡 Datos Importantes

### Conversión de tipos:
- `rt_score` es un **string**: usa `parseFloat()` para convertirlo
- `release_date` es un **string**: usa `parseInt()` para convertirlo

### Directores disponibles:
- Hayao Miyazaki
- Isao Takahata
- Gorō Miyazaki
- Yoshifumi Kondō
- Hiroyuki Morita

### Películas famosas que encontrarás:
- El viaje de Chihiro (Spirited Away)
- Mi vecino Totoro (My Neighbor Totoro)
- La princesa Mononoke (Princess Mononoke)
- El castillo en el cielo (Castle in the Sky)
- El increíble castillo vagabundo (Howl's Moving Castle)
- Ponyo
- Y muchas más...

---

## ⏱️ Tiempo Estimado

**Total: 1 - 1.5 horas**

- Consumir API: 15 min
- Funciones arrays: 25 min
- Interfaz: 25 min
- Ajustes: 10 min

---

## 🌟 Recursos de Ayuda

### Probar la API en el navegador:
Abre esta URL para ver la respuesta:
```
https://ghibliapi.vercel.app/films
```

### Fetch básico:
```javascript
async function cargarDatos() {
  const response = await fetch(URL);
  const datos = await response.json();
  return datos;
}
```

### Convertir strings a números:
```javascript
const numero = parseFloat("95.5");  // 95.5
const entero = parseInt("1986");    // 1986
```

---

¡Buena suerte con tu práctica! 🎬✨

**Recuerda**: Estás trabajando con datos REALES de películas reales.