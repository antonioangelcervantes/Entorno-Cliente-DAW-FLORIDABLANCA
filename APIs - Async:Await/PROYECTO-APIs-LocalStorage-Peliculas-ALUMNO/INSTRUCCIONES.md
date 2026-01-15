# 🎬 Proyecto: Buscador de Películas con Favoritos

## 🎯 Objetivos del Proyecto

Este proyecto integra: 

- ✅ **Fetch API** para consumir OMDb API
- ✅ **LocalStorage** para persistencia de datos
- ✅ **Manipulación del DOM** avanzada
- ✅ **Tailwind CSS** para diseño responsive
- ✅ **Async/Await** y manejo de errores
- ✅ **Array Methods** (map, filter, find, some)

---

## 📋 Requisitos

### 1. **Obtener API Key**

1. Ve a http://www.omdbapi.com/apikey.aspx
2. Ingresa tu email
3. Activa la key desde el correo que te llegue
4. Reemplaza `TU_API_KEY_AQUI` en `app.js`

### 2. **Funcionalidades a Implementar**

#### Búsqueda de Películas
- [ ] Input para buscar por título
- [ ] Botón de búsqueda funcional
- [ ] Enter también debe buscar
- [ ] Mostrar resultados en tarjetas (cards)
- [ ] Cada tarjeta debe mostrar: póster, título, año
- [ ] Botón "Agregar a Favoritos" en cada tarjeta

#### Sistema de Favoritos
- [ ] Agregar películas a favoritos (guardar en LocalStorage)
- [ ] Mostrar lista de favoritos en sidebar
- [ ] Botón para eliminar de favoritos
- [ ] Los favoritos deben persistir al recargar la página
- [ ] Deshabilitar botón si la película ya está en favoritos

#### Validaciones y UX
- [ ] No permitir búsquedas vacías
- [ ] Mostrar error si no se encuentran películas
- [ ] Mostrar "No hay favoritas aún" si no hay favoritos
- [ ] Feedback visual al agregar/eliminar

---

## 🔍 Estructura de la API

### Búsqueda por título: 
```
http://www.omdbapi.com/?apikey=TU_KEY&s=matrix
```

**Respuesta:**
```json
{
  "Search": [
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "totalResults": "7",
  "Response": "True"
}
```

### Detalles completos (opcional):
```
http://www.omdbapi.com/?apikey=TU_KEY&i=tt0133093
```

---

## 💾 LocalStorage - Conceptos Clave

### Guardar datos:
const favoritos = [{ Title: "Matrix", Year: "1999" }];
localStorage.setItem('favoritos', JSON.stringify(favoritos));
```

### Cargar datos:
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
```

### Eliminar: 
localStorage.removeItem('favoritos');
```

---

## 📝 Pasos Sugeridos

1. **Primero**: Obtén tu API key y prueba la API en el navegador
2. **Segundo**:  Implementa `buscarPeliculas()` y muestra resultados en consola
3. **Tercero**: Implementa `mostrarResultados()` con tarjetas básicas
4. **Cuarto**: Implementa `agregarAFavoritos()` y `guardarFavoritos()`
5. **Quinto**: Implementa `cargarFavoritos()` y `mostrarFavoritos()`
6. **Sexto**:  Implementa `eliminarDeFavoritos()`
7. **Séptimo**: Mejora la UX y el diseño

---

## 💡 Tips Importantes

- 🔍 Usa `console.log()` para inspeccionar las respuestas
- 📱 Prueba en diferentes dispositivos
- ⚠️ Maneja el caso cuando `Poster:  "N/A"` (imagen no disponible)
- 🎨 Usa Tailwind para hacer el diseño responsive
- 💾 **Nunca olvides** hacer `JSON.stringify()` al guardar y `JSON.parse()` al cargar
- 🐛 Usa las DevTools → Application → LocalStorage para ver los datos guardados

---

## ��� Mejoras Opcionales (Extra)

- [ ] Agregar calificación (IMDb Rating) - requiere detalles completos
- [ ] Modal con información detallada al hacer click en una película
- [ ] Búsqueda por año o tipo (movie/series)
- [ ] Animaciones con Tailwind (transitions)
- [ ] Botón "Limpiar todos los favoritos"
- [ ] Contador de favoritos

---

## 📚 Recursos

- [OMDb API Docs](http://www.omdbapi.com/)
- [LocalStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Fetch API - MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [JSON. stringify() y JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON)

---

## ✅ Criterios de Evaluación

- ✅ La búsqueda funciona correctamente
- ✅ Se pueden agregar y eliminar favoritos
- ✅ Los favoritos persisten al recargar
- ✅ El diseño es responsive
- ✅ El código está bien estructurado y comentado
- ✅ No hay errores en la consola
- ✅ La experiencia de usuario es fluida

**¡A programar!  🚀**